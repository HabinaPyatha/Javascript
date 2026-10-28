let firstcard = 20
let secondcard = 2
let sum = firstcard + secondcard 
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
function startGame(){
    sumEl.textContent = "Sum:" + sum
    cardsEl.textContent = "Cards:" + firstcard + " " + secondcard
if(sum <21){
    message = "Do you want to draw a new card?🙂"
}
else if(sum === 21){
    messsge = "Wohoo! You've got Blackjack!🥳"
    hasBlackJack= true
} else{
    message = "You're out of the game!😥"
    isAlive = false
}
messageEl.textContent = message
//console.log(message)
}

