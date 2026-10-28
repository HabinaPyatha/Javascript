let firstcard = 20
let secondcard = 1
let sum = firstcard + secondcard 
let hasBlackJack = false

if(sum <21){
    console.log("Do you want to draw a new card?🙂")
}
else if(sum === 21){
    console.log("Wohoo! You've got Blackjack!🥳")
    hasBlackJack= true
} else{
    console.log("You're out of the game!😥")
}

console.log('true')