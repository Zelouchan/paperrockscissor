// HUMAN CHOICE DONE
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
function getComputerChoice(max) {
    return Math.floor(Math.random() * 3) + 1;
  }

  function value() {
    const result = getComputerChoice();

    if (result === 1)
        return "Paper";
    else if (result === 2)
        return "Rock";
    else (result === 3)
        return "Scissors";
  }

let humanScore = 0;
let computerScore = 0;

// Outcome calculation
function playRound(humanChoice, computerChoice) {
    if ((humanChoice == "papier" && computerChoice == 1) || 
        (humanChoice == "steen" && computerChoice == 2) || 
        (humanChoice == "schaar" && computerChoice == 3)) {
            return 'draw'}

    else if ((humanChoice == "papier" && computerChoice == 2) || 
        (humanChoice == "steen" && computerChoice == 3) || 
        (humanChoice == "schaar" && computerChoice == 1)) {
        return 'win'}

    else {
        return 'lose'}
  }
  
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();
  
//   playRound(humanChoice, computerChoice);

  console.log(computerChoice);
  console.log(humanChoice);
  console.log("You played " + person);
  console.log("Computer played " + value());
  console.log(playRound());



// Ask user input
// Check if paper, rock or scissors, or return error and prompt again.
// generate random choice Paper - rock - scissors
// create random number 1-3, assign pps to number
// compare computer choice against user choice
  // same is draw, compare win or lose
