let person = prompt("Pick Paper, Rock or Scissors").toLowerCase();

function getHumanChoice() {
if ( person === 'paper' || person === 'rock' || person === 'scissors')
    {return proceed} else {

    alert("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
    return  prompt("Pick Paper, Rock or Scissors").toLowerCase(); }
}

console.log(getHumanChoice());

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




// Ask user input
// Check if paper, rock or scissors, or return error and prompt again.
// generate random choice Paper - rock - scissors
// create random number 1-3, assign pps to number
// compare computer choice against user choice
  // same is draw, compare win or lose
