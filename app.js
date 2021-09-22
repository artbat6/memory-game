document.addEventListener('DOMContentLoaded', () => {

    //card option
    const cardArray = [
        {
            name: 'bird',
            img: 'images/bird.png'
        },
        {
            name: 'bird',
            img: 'images/bird.png'
        },
        {
            name: 'butterfly',
            img: 'images/butterfly.png'
        },
        {
            name: 'butterfly',
            img: 'images/butterfly.png'
        },
        {
            name: 'fox',
            img: 'images/fox.png'
        },
        {
            name: 'fox',
            img: 'images/fox.png'
        },
        {
            name: 'frog',
            img: 'images/frog.png'
        },
        {
            name: 'frog',
            img: 'images/frog.png'
        },
        {
            name: 'pig',
            img: 'images/pig.png'
        },
        {
            name: 'pig',
            img: 'images/pig.png'
        },
        {
            name: 'skunk',
            img: 'images/skunk.png'
        },
        {
            name: 'skunk',
            img: 'images/skunk.png'
        },
        {
            name: 'snail',
            img: 'images/snail.png'
        },
        {
            name: 'snail',
            img: 'images/snail.png'
        },
        {
            name: 'spider',
            img: 'images/spider.png'
        },
        {
            name: 'spider',
            img: 'images/spider.png'
        },
    ]

cardArray.sort(() => 0.5 - Math.random)


const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create your board

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/dot.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}
// check for matches
function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/dot.png')
        cards[optionTwoId].setAttribute('src', 'images/dot.png')
        alert('Sorry, try again!')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations !  You found them all!'
    }
}

// flip your card
function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}

createBoard() 


})