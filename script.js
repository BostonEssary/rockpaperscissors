
// Uses code to generate a random number between 0-2. Depending on what number is chosen
// determines what choice the computer gets

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    let choice;
    if (randomNum == 0) {
        choice = 'rock';
    }

    else if (randomNum == 1) { 
        choice = 'paper';
    }

    else {
        choice = 'scissors'
    }

    return choice;
}

// provides logic of the game 'Rock, Paper, Scissors' to the computer to determine who wins
// the round

function playRound(playerSelection, computerSelection) {

    if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
    (playerSelection == 'scissors' && computerSelection == 'paper') || 
    (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerRoundCount += 1;
        return console.log(`You win! ${playerSelection} beats ${computerSelection}`);

    }

    else if ((playerSelection == 'scissors' && computerSelection == 'rock') || 
    (playerSelection == 'paper' && computerSelection == 'scissors') || 
    (playerSelection == 'rock' && computerSelection == 'paper')) {

        computerRoundCount += 1;
        return console.log(`You lose! ${playerSelection} is beaten by ${computerSelection}`);

    }

    else if (playerSelection == computerSelection) {
        
        return console.log("Round is a tie!")

    }
}

// Main game loop of the program. Loops 5 times and shows round counts for player and computer

function gameLoop() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Rock, Paper or Scissors?');
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerPlay();
        console.log(`Computer chose ${computerSelection}!`)
        playRound(playerSelection, computerSelection);
        console.log(`Player win Count: ${playerRoundCount} Computer win count: ${computerRoundCount}`);
    }

    playerRoundCount = 0;
    computerRoundCount = 0;
}


let playerRoundCount = 0;
let computerRoundCount = 0;
let playerSelection;

