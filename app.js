const STARTING_POKER_CHIPS = 100; // points
const PLAYERS = 3;
const NO_OF_STARTER_CARDS = 2;
let gameHasEnded = false;


let playerOneName ="Chole"
let playerTwoName="Jasmine"
let playerThreeName="Jen"

let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;

playerOnePoints-=50;
playerTwoPoints -=25
playerThreePoints +=75

console.log(`Welcome to Texas Hold'em. The championship title will be awarded to one of these three players: ${playerOneName}, ${playerTwoName} and ${playerThreeName}. 
Each player has ${STARTING_POKER_CHIPS} in their pot.
We have an exciting game ahead of us. May the best player win!`)

gameHasEnded =((playerOnePoints+playerTwoPoints)==0)||
              ((playerTwoPoints+playerThreePoints)==0)||
              ((playerOnePoints+playerThreePoints)==0);

console.log('Game has anede: ', gameHasEnded)



