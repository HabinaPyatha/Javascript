let cards = [];
let sum =0;
let hasBlackJack = false;
let isAlive = false;
let messageEl=document.getElementById("message-el");
let sumEl=document.getElementById("sum-el");
let cardsEl=document.getElementById("cards-el");
let cardsContainer=document.getElementById("cards-container");
let message = "";
let player = {
name:"Per",
chips:145
};  

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;


function getRandomCard() {
    const suits = ["S", "H", "D", "C"];
    const ranks = ["A", "2", "3", "4", "5", "6",
                   "7", "8", "9", "0", "J", "Q", "K"];

    const rank = Math.floor(Math.random() * ranks.length);
    const suit = suits[Math.floor(Math.random() * suits.length)];

    let value; 

    if (rank === "A"){
        value = 11;
    } 
    else if (["J", "Q", "K", "0"].includes(rank)){
        value = 10;
    }
    else {
        value = Number(rank);
    }

return {
    value: value,
    display: rank === "0" ? "10" : rank,
    suit: suit,
   image:`https://deckofcardsapi.com/static/img/${rank}${suit}.png`
}; 
}

//Calculate the hand total, adjusting Aces when needed
function calculateSum(){
    let total = 0;
    let aces = 0;
        for (let card of cards) {
        total += card.value;

        if (card.display === "A") {
            aces++;
        }
    }

    while (total > 21 && aces > 0) {
        total -= 10;
        aces--;
    }

    return total;
}
function startGame(){
    cards = [getRandomCard(), getRandomCard()];
    sum = calculateSum();
    hasBlackJack = false;
    isAlive = true;
    renderGame();
}
function renderGame(){
    cardsEl.textContent = "Cards: ";
    cardsContainer.innerHTML = "";
   for (let card of cards) {
        const img = document.createElement("img");
        img.src = card.image;
        img.alt = card.display + " of " + card.suit;
        img.className = "playing-card";
        cardsContainer.appendChild(img);
    }
    sum = calculateSum();
    sumEl.textContent = "Sum:" + sum;
if(sum < 21){
    message = "Do you want to draw a new card?🙂"
}
else if(sum === 21){
    message = "Wohoo! You've got Blackjack!🥳"
    hasBlackJack = true
    isAlive = false;
} else{
    message = "You're out of the game!😥"
    isAlive = false
}
messageEl.textContent = message;
//console.log(message)
}

function newcard(){
    //Only allow the player to get a new card if she IS alive and does NOT have BlackJack
    if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard();
    cards.push(card);
   sum = calculateSum();
    renderGame();
    }}
