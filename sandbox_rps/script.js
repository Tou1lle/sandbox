const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

/**
 * This functions generates a random choice made by computer
 * @returns rock, paper or scissor
 */
function getComputerChoice() {
  let choice;
  let choiceIndex = Math.floor(Math.random() * 3);
  
  switch (choiceIndex) {
    case 0:
      choice = ROCK;
      break;
    case 1:
      choice = PAPER;
      break;
    case 2:
      choice = SCISSORS;
      break;
  }

  return choice
}

/**
 * This
 * @returns rock, paper or scissors
 */
function getHumanChoice() {
  let humanChoice = prompt("Choose your fighter!", "rock, paper, scissors");

  return humanChoice.toLowerCase();
}

/**
 * Plays one round of rock, paper, scissors and increments the Score based on the outcome of choices
 * @param {string} humanChoice 
 * @param {string} computerChoice 
 */
function playRound(humanChoice, computerChoice) {
  const winningMessage = `You win! ${humanChoice} beats ${computerChoice}!`;
  const loosingMessage = `You lose! ${humanChoice} doesn't beat ${computerChoice}!`;
  const drawMessage = `It's a draw! ${humanChoice} and ${computerChoice} is the same!`;

  if (humanChoice === ROCK) {
    switch (computerChoice) {
      case ROCK:
        return drawMessage;
      case PAPER:
        return loosingMessage;
      case SCISSORS:
        return winningMessage;
    }
  }

  if (humanChoice === PAPER) {
    switch (computerChoice) {
      case PAPER:
        return drawMessage;
      case SCISSORS:
        return loosingMessage;
      case ROCK:
        return winningMessage;
    }
  }

  if (humanChoice === SCISSORS) {
    switch (computerChoice) {
      case SCISSORS:
        return drawMessage;
      case ROCK:
        return loosingMessage;
      case PAPER:
        return winningMessage;
    }
  }
}

/**
 * 
 * @param {string} message 
 * @returns true if human won the round
 */
function checkHumanWon(message) {
  return message.includes("win");
}

/**
 * 
 * @param {string} message 
 * @returns true if computer won the round
 */
function checkComputerWon(message) {
  return message.includes("lose");
}

/**
 * 
 * @param {string} message 
 * @returns true if the message includes draw
 */
function checkDraw(message) {
  return message.includes("draw");
}

/**
 * Plays 5 rounds of rock paper scissors and increments the score of the winner
 */
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let outcome = playRound(humanChoice, computerChoice);

    if (checkHumanWon(outcome)) humanScore++;
    if (checkComputerWon(outcome)) computerScore++;

    console.log(outcome);
    console.log(humanScore);
    console.log(computerScore);
  }

  if (humanScore > computerScore) {
    console.log("YOU WON THE GAME");
  } else if (humanScore < computerScore) {
    console.log("YOU LOST THE GAME");
  } else {
    console.log("IT'S A DRAW");
  }
}

playGame();