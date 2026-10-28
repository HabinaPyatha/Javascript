let firstCard = 20
let secondCard = 2
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")

function startGame(){
    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards:" + firstCard + " " + secondCard
    sumEl.textContent = "Sum:" + sum
if(sum <= 21){
    message = "Do you want to draw a new card?🙂"
}
else if(sum === 21){
    messsge = "Wohoo! You've got Blackjack!🥳"
    hasBlackJack = true
} else{
    message = "You're out of the game!😥"
    isAlive = false
}
messageEl.textContent = message
//console.log(message)
}

function newcard(){
    console.log("Drawing a new card from the Deck")
    let card = 7
    sum += card
    renderGame()

}
