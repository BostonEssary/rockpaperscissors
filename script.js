
// Uses code to generate a random number between 0-2. Depending on what number is chosen
// determines what choice the computer gets
let playerRoundCount = 0;
let computerRoundCount = 0;
let playerSelection;

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
        
        
        resultsDiv.innerText = `Computer chose ${computerSelection}.\n You win the round! ${playerSelection} beats ${computerSelection}!`;
        playerRoundCount += 1
        scoreDiv.innerText = `Player Score: ${playerRoundCount} Computer Score: ${computerRoundCount}`
        gameWinner();

    }

    else if ((playerSelection == 'scissors' && computerSelection == 'rock') || 
    (playerSelection == 'paper' && computerSelection == 'scissors') || 
    (playerSelection == 'rock' && computerSelection == 'paper')) {

        computerRoundCount += 1;
        resultsDiv.innerText = `Computer chose ${computerSelection}.\n You lose the round! ${playerSelection} is beaten by ${computerSelection}!`;
        scoreDiv.innerText = `Player Score: ${playerRoundCount} Computer Score: ${computerRoundCount}`
        gameWinner();

    }

    else if (playerSelection == computerSelection) {
        
        resultsDiv.innerText = `Computer chose ${computerSelection}.\n Round is a tie!`
        scoreDiv.innerText = `Player Score: ${playerRoundCount} Computer Score: ${computerRoundCount}`
        
    }
}

//

function gameWinner() {
    if (playerRoundCount == 5) {
        resultsDiv.innerText = 'You have won the game! Congratulations!'
        document.body.append(resetButton);
        return;
    }

    else if (computerRoundCount == 5) {
        resultsDiv.innerText = 'You just got beaten by the computer! Ouch..'
        document.body.append(resetButton);
        return;
    }

    else {
        return;
    }


}
// creates button that can reset the game that appears when score hits 5

let resetButton = document.createElement('button');
resetButton.setAttribute('id', 'resetButton');
resetButton.innerText = 'Reset';
resetButton.addEventListener('click', resetGame);

//function to reset the game

function resetGame() {
    playerRoundCount = 0;
    computerRoundCount = 0;
    scoreDiv.innerText = `Player Score: ${playerRoundCount} Computer Score: ${computerRoundCount}`
    resetButton.remove();
    resultsDiv.innerText = 'Choose your move! First to 5 wins!'
}


// creates buttons for the players choice and relays the choice to the program

let rockButton = document.createElement('button');
rockButton.setAttribute('id', 'rock')
document.getElementById('buttonHolder').append(rockButton);
rockButton.innerText = 'Rock';
rockButton.addEventListener('click', rockRound);

function rockRound() {
    playerSelection = 'rock';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
}


let paperButton = document.createElement('button');
paperButton.setAttribute('id', 'paper')
document.getElementById('buttonHolder').append(paperButton);
paperButton.innerText = 'Paper';
paperButton.addEventListener('click', paperRound);

function paperRound() {
    playerSelection = 'paper';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
}


let scissorsButton = document.createElement('button');
scissorsButton.setAttribute('id', 'scissors')
document.getElementById('buttonHolder').append(scissorsButton);
scissorsButton.innerText = 'Scissors';
scissorsButton.addEventListener('click', scissorsRound);

function scissorsRound() {
    playerSelection = 'scissors';
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection)
}


// Creates Divs that display the results of the round and the current score

let resultsDiv = document.createElement('div');
resultsDiv.setAttribute('id', 'resultsDiv');
document.getElementById('textHolder').append(resultsDiv);
resultsDiv.innerText = 'Choose your move! First to 5 wins!'

let scoreDiv = document.createElement('div');
scoreDiv.setAttribute('id', 'scoreDiv');
document.getElementById('textHolder').append(scoreDiv);







