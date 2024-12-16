let person = prompt("Pick Paper, Rock or Scissors");

function getHumanChoice() {
return (response() === rock || paper || scissors || Paper || Rock || Scissors) ? proceed : prompt("Pick Paper, Rock or Scissors");
}

console.log(getHumanChoice());


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
console.log(value());

console.log(response());





// Ask user input
// Check if paper, rock or scissors, or return error and prompt again.
// generate random choice Paper - rock - scissors
// create random number 1-3, assign pps to number
// compare computer choice against user choice
  // same is draw, compare win or lose
