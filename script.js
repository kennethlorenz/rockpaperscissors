/* PSEUDOCODE
User has 3 selections, rock, paper, and scissors.
Whenever a user clicks on a selection, a playGame function gets called.
in the play game function, we get the user's selected hand.
In the play game function, we get the hand the computer has selected.
In the play game function, we call a function to check which player won.
In the play game function, we call a function to display who's the winner.
In the play game function, we ask the player to play again.
*/

let button = document.querySelector("button");
let playerScore = 0;
let computerScore = 0;

let computerChoice;
let userChoice;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const handSelection = ["Rock", "Paper", "Scissors"];
  computerChoice = handSelection[getRandomInt(3)];
  return computerChoice;
}

function getUserChoice() {
  userChoice = window.prompt("Rock, Paper, or Scissors?");
}

function getBothUserAndCompChoice() {
  getUserChoice();
  getComputerChoice();
}

document.querySelector("button").addEventListener("click", () => {
  playGame(userChoice, computerChoice);
});

function playRound(userChoice, computerChoice) {
  // winning hands for the user
  if (
    (userChoice == "Rock" && computerChoice == "Scissors") ||
    (userChoice == "Paper" && computerChoice == "Rock") ||
    (userChoice == "Scissors" && computerChoice == "Paper")
  ) {
    console.log(`You win! Computer chose ${computerChoice}`);
    playerScore += 1;
    console.log(
      `Player Score: ${playerScore}, Computer Score: ${computerScore}`
    );
  }
  // losing hands for the user
  else if (
    (userChoice == "Rock" && computerChoice == "Paper") ||
    (userChoice == "Paper" && computerChoice == "Scissors") ||
    (userChoice == "Scissors" && computerChoice == "Rock")
  ) {
    console.log(`You lose! Computer chose ${computerChoice}`);
    computerScore += 1;
    console.log(
      `Player Score: ${playerScore}, Computer Score: ${computerScore}`
    );
  }
  //draw hand for the user
  else if (
    (userChoice == "Rock" && computerChoice == "Rock") ||
    (userChoice == "Paper" && computerChoice == "Paper") ||
    (userChoice == "Scissors" && computerChoice == "Scissors")
  ) {
    console.log("It's a Draw!");
    console.log(`Computer chose ${computerChoice} too!`);
    console.log(
      `Player Score: ${playerScore}, Computer Score: ${computerScore}`
    );
  }
}

function playGame() {
  let i = 0;
  let keepGoing = true;
  while (keepGoing) {
    getBothUserAndCompChoice();
    playRound(userChoice, computerChoice);
    i++;

    if (i >= 5) {
      console.log("Game Over");
      keepGoing = false;
    }
  }
}
