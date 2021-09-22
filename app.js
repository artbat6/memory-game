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
const grid = document.querySelector('.grid')

//create your board

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/dot.png')
        card.setAttribute('data-id', i)
        //card.addEventListener('click', flipcard)
        grid.appendChild(card)
    }
}
// check for matches


// flip your card
function flipCard() {
    
}

createBoard() 



})