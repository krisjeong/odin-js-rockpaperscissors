function computerPlay() {
    const results = ["Rock", "Paper", "Scissors"];
    let index = getRandomInt(0, 2);
    return results[index];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log(player);
    console.log(computerSelection);

    if (player === "Rock") {
        if (computerSelection === "Paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            return "You Win! Rock beats Scissors";
        } else {
            return "It's a tie!"
        }
    } else if (player === "Paper") {
        if (computerSelection === "Rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "Scissors") {
            return "You Lose! Scissors beats Paper";
        } else {
            return "It's a tie!"
        }
    } else {
        if (computerSelection === "Paper") {
            return "You Win! Scissors beats Paper";
        } else if (computerSelection === "Rock") {
            return "You Lose! Rock beats Scissors";
        } else {
            return "It's a tie!"
        }
    }
        
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice (Rock / Paper / Scissors)");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}



game();