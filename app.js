document.addEventListener('DOMContentLoaded',() => {
const cardArray= [
{                                                    //Adding properties to objects
name:'fries',                                        //we are adding same image two times to our logic to match two same images can work.
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

cardArray.sort(() => 0.5 - Math.random())               //this method sort the cards at random places to disrupt a certain array so whenever page refreshed it will put all cards randomlly.            

const grid = document.querySelector('.grid')   //putting randomly sorted cards in grid
const result = document.querySelector('#result')
let cardsChosen = []                      //to store names
let cardsChosenIds = []                   //to store ids
let cardsWon = []

function createBoard() {                               //creating board
for(let i=0; i<cardArray.length; i++) {              
   const card = document.createElement('img');
   card.src('src,'Images\blank.png');
   card.setAttribute('data-id', i);                //assigning a data id to each card
   card.addEventListener('click', flipCard);       //adding property to each card; when clicked, it calls flipcard function
   grid.appendChild(card);
}
}

function flipCard() {
let cardId = this.getAttribute('data-id')            //'this', it gives us the particular card we clicked
cardsChosenIds.push(cardId)
cardsChosen.push(cardArray[cardId].name)             //it will tell us which card is pushed in cardsChosen with returning their properties
this.setAttribute('src',cardArray[cardId].img)      //overwriting blank image with card image when flipped
if (cardsChosen.length == 2){
setTimeout(checkForMatch,500)                       //function to match two images or cards in cardsChosen array
}
}

function checkForMatch() {                                                            
const cards = document.querySelectorAll('img')
const optiononeId = cardsChosenIds[0]
const optiontwoId  = cardsChosenIds[1]

//one thing is to make sure that no same image can be clicked twice 
if (optiononeId === optiontwoId) {
alert('You have clicked  same image!')                                 //flip image to default blank image if same card clicked twice
cards[optiononeId].setAttribute('src', 'Images/blank.png')        
cards[optiontwoId].setAttribute('src', 'Images/blank.png')
 }
else if(cardsChosen[0] === cardsChosen[1]) {                      //checking if two cards with same name are clicked gives alert
   alert('You have found a match!')
   cards[optiononeId].setAttribute('src','Images/white.png')     //turn matched images into white
   cards[optiontwoId].setAttribute('src','Images/white.png')
   cards[optiononeId].removeEventListener('click',flipCard)        //removing eventListener such that flipped images must not be clicked again
   cards[optiontwoId].removeEventListener('click',flipCard)
   cardsWon.push(cardsChosen)                                    //remove match from cardsChosen array to cardsWon array
}
else{
  cards[optiononeId].setAttribute('src','Images/blank.png')   //if all cards are flipped and no two cards are chosen simoul. 
  cards[optiontwoId].setAttribute('src','Images/blank.png')   
  alert('Try Again!')                                          // alert this.
}
  cardsChosen = []
  cardsChosenIds = []
  result.textContent = cardsWon.length
  if(cardsWon === cardArray.length/2){                //we are putting 6 cards in cards won each time and  
     result.textContent('You have Won!')              //if two same cards are chosen at a time and this happens six times,  the game will finish. 
  }
}
createBoard()
})
