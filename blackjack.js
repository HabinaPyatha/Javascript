let firstcard = 20
let secondcard = 2
let sum = firstcard + secondcard 
let hasBlackJack = false
let isAlive = true
let message = ""

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

function startGame(){
    
}

