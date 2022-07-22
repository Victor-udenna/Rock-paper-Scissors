let computerOption = ['Rock', 'Paper', 'Scissors']
const computerPlay = () => {
  return computerOption[Math.floor(Math.random() * computerOption.length)]
}

// console.log(computerPlay());


// let comPuter = "";
// let You = "";
// let draw = "";


for (let i = 0; i < 5; i++) {

  
  let playerSelection = prompt('Enter Rock, Paper or Scissors')
  

  

// const

const computerSelection = computerPlay()

  const playRound = (playerselection, computerselection) => {
    //Your code here
    if (playerselection === computerselection) {
      return `You picked ${playerselection} and Computer picked ${computerselection}, It's a tie `
    } else if (playerselection == 'Rock' && computerselection == 'Paper') {
      return `You picked ${playerSelection} and Computer picked ${computerselection}, Computer wins `
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
      return `You picked ${playerselection} and Computer picked ${computerSelection}, You win `
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
      return `You picked ${playerselection} and Computer picked ${computerselection}, Computer wins `
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
      return `You picked ${playerselection} and Computer picked ${computerselection}, You win `
    } else if (playerselection == 'Rock' && computerselection == 'Scissors') {
      return `You picked ${playerselection} and Computer picked ${computerselection}, You win `
    } else if (playerselection == 'Scissors' && computerselection == 'Rock') {
      return `You picked ${playerselection} and Computer picked ${computerselection}, Computer wins `
    }

   

  }

let roundresult = playRound(computerSelection, playerSelection);
let playerscore = 0;
let computerscore = 0;

  const game = (a, b) => {


    if (roundresult.includes("It's a tie")) {
      computerscore = 0;
      playerscore = 0;
    }
   else if (roundresult.includes("Computer wins")) {
      computerscore++
    } else if (roundresult.includes("You win")) {
      playerscore++
    } 

    if (playerscore > computerscore) {
      return `You win the game with ${playerscore} points! against Computer's ${computerscore} points`;
    } else if (playerscore < computerscore) {
      return `Computer wins the game with ${computerscore} points! against your ${playerscore} points`;
    } else {
      return `Computer has ${computerscore} points and Player has ${playerscore} points. It's a tie!`;
    }

    return playRound(a, b);
    console.log(roundresult);
  }

console.log(game(playerSelection, computerSelection));


}
