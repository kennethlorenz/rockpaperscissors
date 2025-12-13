/* PSEUDOCODE
User has 3 selections, rock, paper, and scissors.
Whenever a user clicks on a selection, a playGame function gets called.
in the play game function, we get the user's selected hand.
In the play game function, we get the hand the computer has selected.
In the play game function, we call a function to check which player won.
In the play game function, we call a function to display who's the winner.
In the play game function, we ask the player to play again.
*/

const HANDSELECTION = document.querySelector(".hand-selection");
const PLAYERSCORETEXT = document.querySelector(".playerScore");
const COMPUTERSCORETEXT = document.querySelector(".computerScore");
const HEADING = document.querySelector(".heading");
const MESSAGE = document.querySelector(".message");
const PLAYERHAND = document.querySelector(".playerHand");
const COMPUTERHAND = document.querySelector(".computerHand");
const YOUWINTEXT = "You Win!";
const YOULOSTTEXT = "You Lost!";
const DRAWTEXT = "It's a Draw!";
const ICONS = ["✊", "✋", "✌️"];

let playerScore = 0;
let computerScore = 0;

let computerChoice;
let playerChoice;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {
  const handSelection = ["Rock", "Paper", "Scissors"];
  computerChoice = handSelection[getRandomInt(3)];
  return computerChoice;
}

function updateHeadingAndMessage(headingText, messageText) {
  HEADING.textContent = headingText;
  MESSAGE.textContent = messageText;
}

function updatePlayerScoreText() {
  playerScore += 1;
  PLAYERSCORETEXT.textContent = playerScore;
}
function updateComputerScoreText() {
  computerScore += 1;
  COMPUTERSCORETEXT.textContent = computerScore;
}

function updatePlayerHandIcon(iconIndex) {
  PLAYERHAND.textContent = ICONS[iconIndex];
}
function updateComputerHandIcon(iconIndex) {
  COMPUTERHAND.textContent = ICONS[iconIndex];
}

function getIconByIndex(hand) {
  let index;
  if (hand == "Rock") {
    index = 0;
  } else if (hand == "Paper") {
    index = 1;
  } else if (hand == "Scissors") {
    index = 2;
  }
  return index;
}

function updateHands(playerChoice, computerChoice) {
  playerIndex = getIconByIndex(playerChoice);
  computerIndex = getIconByIndex(computerChoice);

  updatePlayerHandIcon(playerIndex);
  updateComputerHandIcon(computerIndex);
}

function playRound(playerChoice, computerChoice) {
  // winning hands for the user
  if (
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Paper" && computerChoice == "Rock") ||
    (playerChoice == "Scissors" && computerChoice == "Paper")
  ) {
    updateHeadingAndMessage(YOUWINTEXT, `Computer chose ${computerChoice}`);
    updateHands(playerChoice, computerChoice);
    updatePlayerScoreText();
  }
  // losing hands for the user
  else if (
    (playerChoice == "Rock" && computerChoice == "Paper") ||
    (playerChoice == "Paper" && computerChoice == "Scissors") ||
    (playerChoice == "Scissors" && computerChoice == "Rock")
  ) {
    updateHeadingAndMessage(YOULOSTTEXT, `Computer chose ${computerChoice}`);
    updateHands(playerChoice, computerChoice);
    updateComputerScoreText();
  }
  //draw hand for the user
  else if (
    (playerChoice == "Rock" && computerChoice == "Rock") ||
    (playerChoice == "Paper" && computerChoice == "Paper") ||
    (playerChoice == "Scissors" && computerChoice == "Scissors")
  ) {
    updateHeadingAndMessage(DRAWTEXT, `Computer also chose ${computerChoice}`);
    updateHands(playerChoice, computerChoice);
  }
}

function playGame() {
  let i = 0;
  let keepGoing = true;
  while (keepGoing) {
    getBothUserAndCompChoice();
    playRound(playerChoice, computerChoice);
    i++;

    if (i >= 5) {
      console.log("Game Over");
      keepGoing = false;
    }
  }
}

HANDSELECTION.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "rock":
      playerChoice = "Rock";
      computerChoice = getComputerChoice();
      playRound(playerChoice, computerChoice);
      break;
    case "paper":
      playerChoice = "Paper";
      computerChoice = getComputerChoice();
      playRound(playerChoice, computerChoice);
      break;
    case "scissors":
      playerChoice = "Scissors";
      computerChoice = getComputerChoice();
      playRound(playerChoice, computerChoice);
      break;
  }
});
