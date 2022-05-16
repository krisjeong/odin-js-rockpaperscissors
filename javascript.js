let playerScore = 0;
let computerScore = 0;

const display = document.querySelector('.display');
const playerCurrentScore = document.querySelector('#player-score');
const computerCurrentScore = document.querySelector('#computer-score');
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');

// Game functionality
function computerPlay() {
    const results = ["Rock", "Paper", "Scissors"];
    let index = getRandomInt(0, 2);
    return results[index];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function playRound(playerSelection, computerSelection) {
    if (playerScore < 5 && computerScore < 5) {
    
        player = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();
        console.log(player);
        console.log(computerSelection);
        playerChoice.textContent = "Player chose " + player;
        computerChoice.textContent = "Computer chose " + computerSelection;

        if (player === "Rock") {
            if (computerSelection === "Paper") {
                display.textContent = "You Lose! Paper beats Rock";
                computerScore++;
                computerCurrentScore.textContent = "Computer: " + computerScore;
            } else if (computerSelection === "Scissors") {
                display.textContent = "You Win! Rock beats Scissors";
                playerScore++;
                playerCurrentScore.textContent = "Player: " + playerScore;
            } else {
                display.textContent = "It's a tie!";
            }
        } else if (player === "Paper") {
            if (computerSelection === "Rock") {
                display.textContent = "You Win! Paper beats Rock";
                playerScore++;
                playerCurrentScore.textContent = "Player: " + playerScore;
            } else if (computerSelection === "Scissors") {
                display.textContent = "You Lose! Scissors beats Paper";
                computerScore++;
                computerCurrentScore.textContent = "Computer: " + computerScore;
            } else {
                display.textContent = "It's a tie!";
            }
        } else {
            if (computerSelection === "Paper") {
                display.textContent = "You Win! Scissors beats Paper";
                playerScore++;
                playerCurrentScore.textContent = "Player: " + playerScore;
            } else if (computerSelection === "Rock") {
                display.textContent = "You Lose! Rock beats Scissors";
                computerScore++;
                computerCurrentScore.textContent = "Computer: " + computerScore;
            } else {
                display.textContent = "It's a tie!";
            }
        }
    }
    if (playerScore === 5) {
        display.textContent = "You won the game!";
    } 
    if (computerScore === 5) {
        display.textContent = "You lost the game!";
    }   
}

// function game() {
    // for (let i = 0; i < 5; i++) {
        // let playerSelection = prompt("Enter your choice (Rock / Paper / Scissors)");
        // let computerSelection = computerPlay();
        // console.log(playRound(playerSelection, computerSelection));
    // }
// }

// style/elems
// 3 buttons
const buttonRock = document.querySelector('#Rock');
buttonRock.addEventListener('click', () => {
    console.log(playRound("Rock", computerPlay()));
});

const buttonPaper = document.querySelector('#Paper');
buttonPaper.addEventListener('click', () => {
    console.log(playRound("Paper", computerPlay()));
});

const buttonScissors = document.querySelector('#Scissors');
buttonScissors.addEventListener('click', () => {
    console.log(playRound("Scissors", computerPlay()));
});


// main()
// game();