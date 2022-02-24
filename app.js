<!DOCTYPE html>
<html>
<head>
<title>Memory Game</title>
<style>
.grid {
  width: 400px;
  height: 307px;
  border: solid red 1px;
}
</style>
<script>
document.addEventListener('DOMContentLoaded',() => {
const cardArray= [
{
name:'fries',
img: 'Images/fries.png',
},
{
name:'cheeseburger',
img: 'Images/cheeseburger.png',
},
{
name:'icecream',
img: 'Images/ice-cream.png',
},
{
name:'pizza',
img: 'Images/pizza.png'
},
{
name:'milkshake',
img: 'Images/milkshake.png'
},
{
name:'hotdog',
img: 'Images/hotdog.png'
},
{
name:'fries',
img: 'Images/fries.png',
},
{
name:'cheeseburger',
img: 'Images/cheeseburger.png',
},
{
name:'icecream',
img: 'Images/ice-cream.png',
},
{
name:'pizza',
img: 'Images/pizza.png'
},
{
name:'milkshake',
img: 'Images/milkshake.png'
},
{
name:'hotdog',
img: 'Images/hotdog.png'
}
]

cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray)

const grid = document.querySelector('.grid')
const result = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []

function createBoard() {
for(let i=0; i<cardArray.length; i++) {
   const card = document.createElement('img');
   card.src = 'C:\Users\macewan\Downloads\Project Memory Games\Images\blank.png';
   card.setAttribute('data-id', i);
   card.addEventListener('click', flipCard);
   grid.appendChild(card);
}
}

function flipCard() {
let cardId = this.getAttribute('data-id')
cardsChosen.push(cardArray[cardId].name)
cardsChosenIds.push(cardId)
this.setAttribute('src',cardArray[cardId].img)
if (cardsChosen.length == 2){
setTimeout(checkForMatch,500)
}
console.log(cardsChosenIds)
}

function checkForMatch() {
const cards = document.querySelectorAll('img')
const optiononeId = cardsChosenIds[0]
const optiontwoId  = cardsChosenIds[1]

if (optiononeId === optiontwoId) {
alert('You have clicked  same image!')
cards[optiononeId].setAttribute('src', 'Images/blank.png')
cards[optiontwoId].setAttribute('src', 'Images/blank.png')
 }
else if(cardsChosen[0] === cardsChosen[1]) {
   alert('You have found a match!')
   cards[optiononeId].setAttribute('src','Images/white.png')
   cards[optiontwoId].setAttribute('src','Images/white.png')
   cards[optiononeId].removeEventListener('click',flipCard)
   cards[optiontwoId].removeEventListener('click',flipCard)
   cardsWon.push(cardsChosen)
}
else{
  cards[optiononeId].setAttribute('src','Images/blank.png')
  cards[optiontwoId].setAttribute('src','Images/blank.png')
  alert('Try Again!')
}
  cardsChosen = []
  cardsChosenIds = []
  result.textContent = cardsWon.length
  if(cardsWon === cardArray.length/2){
     result.textContent('You have Won!')
  }
  cardsChosen = []
  cardsChosenIds = []
}
createBoard()
})
</script>
</head>
<body>
<h3>
 Score<Span id="result"></Span>
</h3>
<div class="grid"></div>
</body>
</html>
