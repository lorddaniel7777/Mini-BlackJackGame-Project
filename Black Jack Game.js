/*----------------------- MY MINI BLACKJACK GAME PROJECT  ----------------------

Pre-requisites:
1.Variables
2.Conditionals
3.Loops
4.Functions
5.Arrays
6.Objects
7.NodeJS
---------------
Instruction:    
1. Will generate a deck of 52 cards with 2 Ace and all 4 suits(spade, clubs, diamonds, hearts).
2. At the start of the game the dealer and player each get dealt 2 random cards.
3. Gameplay:
   a. Continue while neither player has exceeded 21 points or got exactly 21 points.
   b. The player is dealt a random card.
   c. Dealer wins - If the player goes above 21.
      Player wins - If the player gets exactly 21.
   d. The dealer is dealt a random card.
   e. Player wins - if the dealer goes above 21.
      Player wins - if the dealer gets exactly 21.
   f. Repeat - Go back to step a.
--------------
Point Breakdown:
2-10 - Cards 2 to 10.
10 - Jack, Queen and King.
1 - Ace 
 ------------------------------------------------------------------------*/
// Code:
// Example Output: {card: "King", suit: "Spade"}

 

const initialDeck = () => {
// Instead of manually putting each card and suits manually on the deck array, I did use a for of and push.//
    const deck = [];    
    const suits =  ["Spade", "Clubs", "Diamonds", "Hearts"];
    const cards =  ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"]; 


    for(const card of cards){
        for(const suit of suits){
            deck.push({card: card, suit: suit});
        }
    }
return deck;      
}   


const drawCard = (deck) => {
// I used Math floor ad Math random to generate a number between 0-51 which points to index of deck to get those random.
// initial deck for player and dealer.
    const randomIndexCard = Math.floor(Math.random() * deck.length);
    const card = deck[randomIndexCard];
// Used splice to remove the card on the deck to avoid getting same card. 
    deck.splice(randomIndexCard, 1);
return card;
}   

// To get the score value of card for each hand //
const scoreCheck = (hand) => {
    let total = 0;
        for(const cardObj of hand){
// The.card is to ask for the value of cards array //
            if(cardObj.card === "King" || cardObj.card === "Queen" || cardObj.card === "Jack"){
                total += 10;
            }else if(cardObj.card === "Ace"){
                total += 1;
            }else{  
// Turn number string from cards array to actual number using Number // 
                total += Number(cardObj.card);
            }
        }   
return total;
}

const myDeck = initialDeck(); 

// Initialize player and dealer hand, 2 cards each// 
const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(myDeck));
playerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));

console.log("Game Start !!!");
console.log("Player Hand", playerHand);
console.log("Player Score", scoreCheck(playerHand));
console.log("Dealer Hand", dealerHand);
console.log("Player Score", scoreCheck(dealerHand));


// Loop and check if the player or dealer gets 21 or bust(over 21) then break from the loop//
while(true){
    playerHand.push(drawCard(myDeck));
    const playerScore = scoreCheck(playerHand);
    let dealerScore = scoreCheck(dealerHand);
    
    if(playerScore > 21){
        console.log(`You lose! Your score was: ${playerScore}, Dealer score was ${dealerScore}`);
        break;
    }
    if(playerScore === 21){
        console.log(`You win!!! Your score was: ${playerHand}, Dealer score was ${dealerHand}`);
        break;
    }
    dealerHand.push(drawCard(myDeck));  
    dealerScore = scoreCheck(dealerHand);
    if(dealerScore > 21){
        console.log(`You Win!!! Your score was: ${playerScore}, Dealer score was ${dealerScore}`);
        break;
    }
    if(dealerScore === 21){
        console.log(`You lose! Your score was: ${playerScore}, Dealer score was ${dealerScore}`);
        break;
    }
}


console.log("End Game Score!"); 
console.log("Player Hand", playerHand);
console.log("Player Score", scoreCheck(playerHand));
console.log("Dealer Hand", dealerHand);
console.log("Dealer Score", scoreCheck(dealerHand));






