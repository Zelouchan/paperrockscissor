

let humanScore = 0;
let computerScore = 0;


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

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice()

  function value() {
    const result = computerChoice;

    if (result == 1)
        return "paper";
    else if (result == 2)
        return "pock";
    else (result == 3)
        return "scissors";
  }

// loop entire game

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
  

  
  playRound(humanChoice, computerChoice);


  console.log("You played " + person);
  console.log("Computer played " + value());


  // outcome message
  function message() {
    if    (playRound() == 'draw') { 
        return "It is a draw! Try again"
    }

    else if (playRound() == 'win') {
        return ("You Win! " + person + " beats " + value() + "." );
    }

    else {
        return ("You Lost! " + value() + " beats " + person + ".");
    }
  }



//   keeping score
function score() {

    
if  (playRound() == 'win') {
    return (humanScore++)
}
else if (playRound() == 'lose') {
    return (computerScore++)
}

else {return}

}

// Console messages
console.log(message());
console.log("You have " + score(humanScore) + " points." );
console.log("Computer has " + score(computerScore) + " points.");


