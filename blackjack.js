let playerCount = 0;
let dealerCount =0;

function startGame() {
playerCount = getCards() + getCards();
if (playerCount > 21) {
    console.log("you lose");
} else {
    // console.log("hit or stay?");
    prompt("hit or stay");
    if(prompt == "hit") {
        playerCount = getCards()
    } else {
        
    }
}

}

function getCards() {
    return Math.random()*11;
}

