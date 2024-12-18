// HUMAN CHOICE INPUT DONE
function getHumanChoice() {
if ( person === 'paper' ) 
    return "papier";
 else if (person === 'rock') 
    return "steen";
 else if (person === 'scissors') 
    return "schaar";
    
else
    alert("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
    return 'wrong';
}

// Loop untill correct answer is given
do {
   person = prompt("Pick Paper, Rock or Scissors").toLowerCase();  
}
while (getHumanChoice() === 'wrong' ) 

// COMPUTER CHOICE - Done
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
  }

  function value() {
    const result = computerChoice;

    if (result == 1)
        return "Paper";
    else if (result == 2)
        return "Rock";
    else (result == 3)
        return "Scissors";
  }

let humanScore = 0;
let computerScore = 0;

  // Outcome calculation DONE
function playRound() {
    if        (humanChoice == 'papier' && computerChoice == 1) {
        return 'draw'} 
    else if   (humanChoice == 'steen' && computerChoice == 2) {
        return 'draw'} 
    else if   (humanChoice == 'schaar' && computerChoice == 3) {
        return 'draw'}

    else if (humanChoice == 'papier' && computerChoice == 2) {
        return 'win'} 
    else if (humanChoice == 'steen' && computerChoice == 3) {
        return 'win'} 
    else if (humanChoice == 'schaar' && computerChoice == 1) {
        return 'win'}

    else {
        return 'lose'}
  }
  
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice()
  
  playRound(humanChoice, computerChoice);


  console.log("You played " + person);
  console.log("Computer played " + value());

  console.log("You " + playRound() + "!");


//   // figure out how to display function in message
//   function message() {
//     if    (playRound() == 'draw') {
//         return "It is a draw! Try again"
//     }

//     else if (playRound() == 'win') {
//         return "You Win!"
//     }

//     else {
//         return "You Lost!"
//     }
//   }

//   console.log(message());

// Ask user input
// Check if paper, rock or scissors, or return error and prompt again.
// generate random choice Paper - rock - scissors
// create random number 1-3, assign pps to number
// compare computer choice against user choice
  // same is draw, compare win or lose
