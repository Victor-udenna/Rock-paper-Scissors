let computerOption = ["Rock", "Paper", "Scissors"];

const computerPlay = () => {
  return computerOption[Math.floor(Math.random() * computerOption.length)];
};

let playerSelection;
// let playerSelection = prompt("enter Rock, Paper and Scissors");
// player option
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `You picked ${playerSelection} and Computer picked ${computerSelection}, It's a tie!`;
  } else if (playerSelection == "Rock" && computerSelection == "Paper") {
    return `You picked ${playerSelection} and Computer picked ${computerSelection}, Computer wins!`;
  } else if (playerSelection == "Paper" && computerSelection == "Rock") {
    return `You picked ${playerSelection} and Computer picked ${computerSelection}, You win!`;
  } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    return `You picked ${playerSelection} and Computer picked ${computerSelection}, Computer wins!`;
  } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    return `You picked ${playerSelection} and Computer picked ${computerSelection}, You win!`;
  } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    return `You picked ${playerSelection} and Computer picked ${computerSelection}, You win!`;
  } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    return `You picked ${playerSelection} and Computer picked ${computerSelection}, Computer wins!`;
  } else if (playerSelection === "") {
    return "Please enter a valid selection";
  }
}

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  // keep track of points
  // loop that run the game 5 times
  for (let i = 0; i < 5; i++) {
    let playerselections = prompt("ENTER Rock, Paper and Scissors");
    playerSelection = playerselections;
    let computerSelection = computerPlay();
    let roundresult = playRound(computerSelection, playerSelection);
    // return playRound(playerSelection, computerSelection);
    if (roundresult.includes("You win!")) {
      playerScore++;
    } else if (roundresult.includes("Computer wins!")) {
      computerScore++;
    } else {
      ("Enter a valid selection");
    }

    console.log(roundresult);
    // displays the result of a single round
  }

  if (playerScore > computerScore) {
    return `Player wins the game with ${playerScore} points! to Computer's ${computerScore} points`;
  } else if (playerScore < computerScore) {
    return `Computer wins! the game with ${computerScore} points! to Player's ${playerScore} points`;
  } else {
    return `Computer has ${computerScore} points and Player has ${playerScore} points. It's a tie!`;
  }
};

console.log(game());
let Rock = document.querySelector('.rock_btn');
let Paper = document.querySelector('.paper_btn');
let Scissors = document.querySelector(',scissors_btn');
// displays the winner of all rounds
// let display = document.querySelector()
