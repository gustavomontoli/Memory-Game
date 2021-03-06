document.addEventListener('DOMContentLoaded', () => {
// card options

const cardArray = [
{
    name: 'fries',
    img: 'images/fries.png'
},
{
    name: 'fries',
    img: 'images/fries.png'
},
{
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
},
{
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
},
{
    name: 'hotdog',
    img: 'images/hotdog.png'
},
{
    name: 'hotdog',
    img: 'images/hotdog.png'
},
{
    name: 'ice-cream',
    img: 'images/ice-cream.png'
},
{
    name: 'ice-cream',
    img: 'images/ice-cream.png'
},
{
    name: 'milkshake',
    img: 'images/milkshake.png'
},
{
    name: 'milkshake',
    img: 'images/milkshake.png'
},
{
    name: 'pizza',
    img: 'images/pizza.png'
},
{
    name: 'pizza',
    img: 'images/pizza.png'
}
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

// create the board by looping over the card and create 
// an image element for each one and set each card as an 
// attribute linking it to the image of relative path
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        // give each one a data_id and loop over each one
        // to give them an id that goes from 0 to 11
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosenId[0] === cardsChosenId[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', images/white.png)
        cards[optionTwoId].setAttribute('src', images/white.png)
        cardsWon.push(cardsChosen)
    }  else if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry, try again')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })