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
        {
            name: 'avocado',
            img: 'images/avocado.png'
        },
        {
            name: 'avocado',
            img: 'images/avocado.png'
        },
        {
            name: 'bee',
            img: 'images/bee.png'
        },
        {
            name: 'bee',
            img: 'images/bee.png'
        },
        {
            name: 'brain',
            img: 'images/brain.png'
        },
        {
            name: 'brain',
            img: 'images/brain.png'
        },
        {
            name: 'burger',
            img: 'images/burger.png'
        },
        {
            name: 'burger',
            img: 'images/burger.png'
        },
        {
            name: 'cherries',
            img: 'images/cherries.png'
        },
        {
            name: 'cherries',
            img: 'images/cherries.png'
        },
        {
            name: 'chick',
            img: 'images/chick.png'
        },
        {
            name: 'chick',
            img: 'images/chick.png'
        },
        {
            name: 'clover',
            img: 'images/clover.png'
        },
        {
            name: 'clover',
            img: 'images/clover.png'
        },
        {
            name: 'cupcake',
            img: 'images/cupcake.png'
        },
        {
            name: 'cupcake',
            img: 'images/cupcake.png'
        },
        {
            name: 'eye',
            img: 'images/eye.png'
        },
        {
            name: 'eye',
            img: 'images/eye.png'
        },
        {
            name: 'fire',
            img: 'images/fire.png'
        },
        {
            name: 'fire',
            img: 'images/fire.png'
        },
        {
            name: 'flamingo',
            img: 'images/flamingo.png'
        },
        {
            name: 'flamingo',
            img: 'images/flamingo.png'
        },
        {
            name: 'flower',
            img: 'images/flower.png'
        },
        {
            name: 'flower',
            img: 'images/flower.png'
        },
        {
            name: 'horse',
            img: 'images/horse.png'
        },
        {
            name: 'horse',
            img: 'images/horse.png'
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
            name: 'lobster',
            img: 'images/lobster.png'
        },
        {
            name: 'lobster',
            img: 'images/lobster.png'
        },
        {
            name: 'monkey',
            img: 'images/monkey.png'
        },
        {
            name: 'monkey',
            img: 'images/monkey.png'
        },
        {
            name: 'popcorn',
            img: 'images/popcorn.png'
        },
        {
            name: 'popcorn',
            img: 'images/popcorn.png'
        },
        {
            name: 'pretzel',
            img: 'images/pretzel.png'
        },
        {
            name: 'pretzel',
            img: 'images/pretzel.png'
        },
        {
            name: 'ring',
            img: 'images/ring.png'
        },
        {
            name: 'ring',
            img: 'images/ring.png'
        },
        {
            name: 'star',
            img: 'images/star.png'
        },
        {
            name: 'star',
            img: 'images/star.png'
        },
        {
            name: 'apple',
            img: 'images/apple.png'
        },
        {
            name: 'apple',
            img: 'images/apple.png'
        },
        {
            name: 'cake',
            img: 'images/cake.png'
        },
        {
            name: 'cake',
            img: 'images/cake.png'
        },
        {
            name: 'cookie',
            img: 'images/cookie.png'
        },
        {
            name: 'cookie',
            img: 'images/cookie.png'
        },
    ]

cardArray.sort(() => 0.5 - Math.random())

// grabbing .grid div and result

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
var cardsChosen = []
var cardsChosenId = []
var cardsWon = []

//create your board

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/dot.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
// check for matches

function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/dot.png')
      cards[optionTwoId].setAttribute('src', 'images/dot.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
    //   alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/pink.png')
      cards[optionTwoId].setAttribute('src', 'images/pink.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/dot.png')
      cards[optionTwoId].setAttribute('src', 'images/dot.png')
    //   alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'WOW!'
    }
}

// flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
  }

createBoard() 


})