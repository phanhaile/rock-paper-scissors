
function getComputerChoice() {
    let randomNumber = Math.random();
    let computerChoice;

    if (randomNumber < 0.33) {
        computerChoice = "rock";
    } else if (randomNumber < 0.66) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    return computerChoice;
}
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        console.log("Draw!");
        return "draw";

    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("Player Wins!");
        return "player";

    } else {
        console.log("Computer Wins!");
        return "computer";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
      for (let i = 1; i <= 5; i++) {
    let playerChoice = prompt("Choose Rock, Paper or Scissors");
    if (playerChoice === null) {
    console.log("Game cancelled.");
    return;
}

playerChoice = playerChoice.toLowerCase();
if (
        playerChoice !== "rock" &&
        playerChoice !== "paper" &&
        playerChoice !== "scissors"
    ) {
        console.log("Invalid choice! Please choose rock, paper, or scissors.");
        return;
    }

    let computerChoice = getComputerChoice();
    console.log("Round:", i); 
    console.log("Player:", playerChoice);
    console.log("Computer:", computerChoice);
let winner = playRound(playerChoice, computerChoice);
if (winner === "player") {
    humanScore++;
}

if (winner === "computer") {
    computerScore++;
}

}

console.log("Final Score:");
console.log("Player:", humanScore);
console.log("Computer:", computerScore);

if (humanScore > computerScore) {
    console.log("You won the game!");
} else if (computerScore > humanScore) {
    console.log("Computer won the game!");
} else {
    console.log("The game is a tie!");
}

}

playGame();