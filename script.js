
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
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("Player Wins!");
    } else {
        console.log("Computer Wins!");
    }
}

function playGame() {
      for (let i = 1; i <= 5; i++) {
    let playerChoice = prompt("Choose Rock, Paper or Scissors");
    playerChoice = playerChoice.toLowerCase();


    let computerChoice = getComputerChoice();
    console.log("Round:", i); 
    console.log("Player:", playerChoice);
    console.log("Computer:", computerChoice);

    playRound(playerChoice, computerChoice);

}
}
playGame();