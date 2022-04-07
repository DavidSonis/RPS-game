let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";
let pCount = document.getElementById('pCount');
let cCount = document.getElementById('cCount');

function computerPicks() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      computerChoice = "paper";
      break;
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
}

function selectRock() {
  computerPicks();
  switch (computerChoice) {
    case "paper":
      computerScore++;
      break;
    case "rock":
      break;
    case "scissors":
      playerScore++;
      break;
  }
  pCount.textContent = playerScore;
  cCount.textContent = computerScore;
}

function selectPaper() {
  computerPicks();
  switch (computerChoice) {
    case "scissors":
      computerScore++;
      break;
    case "paper":
      break;
    case "rock":
      playerScore++;
      break;
  }
  pCount.textContent = playerScore;
  cCount.textContent = computerScore;
}

function selectScissors() {
  computerPicks();
  switch (computerChoice) {
    case "rock":
      computerScore++;
      break;
    case "scissors":
      break;
    case "paper":
      playerScore++;
      break;
  }
  pCount.textContent = playerScore;
  cCount.textContent = computerScore;
}

function reset() {
  computerScore = 0;
  playerScore = 0;
  pCount.textContent = playerScore;
  cCount.textContent = computerScore;
}
