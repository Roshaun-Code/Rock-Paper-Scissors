//Declaring the score variables
let playerScore = 0;
let computerScore = 0;

const playerScore_span = document.getElementById('playerScore_span')
const computerScore_span = document.getElementById('computerScore_span')
const buttons = document.querySelectorAll('button')
const results_p = document.querySelector('.result > p')
const body = document.body;

buttons.forEach((button) => {
    button.addEventListener('click', function () {
        playerSelection = button.id;
        let computerSelection = computerPlay();
        round(playerSelection, computerSelection);
        //scoreCalc();
    })
});

//function computerplay generates a random number between 1 to 3 then assigns rock, paper or scissors to the number 
function computerPlay (){
    const choices = ['rock', 'paper', 'scissors']
    let computerSelection = Math.floor(Math.random() * 3);
    return choices[computerSelection];
}

function convertTo(word){
    if (word === "rock") return "Rock";
    if (word === "paper") return "Paper";
    else return "Scissors";
}

function win(user, computer){
    console.log("Player wins");
    playerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    results_p.innerHTML = `${convertTo(user)} beats ${convertTo(computer)}. You win!`
}

function lose(user, computer){
    console.log("Player lost");
    computerScore++;
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    results_p.innerHTML = `${convertTo(user)} loses to ${convertTo(computer)}. You Lost..`
}

function draw(user, computer){
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    results_p.innerHTML = `${convertTo(user)} ties with ${convertTo(computer)}. Its a draw.`

}

//function round calculates whether the computer wins or the player wins
function round (playerSelection, computerSelection) {
    switch (playerSelection + computerSelection){
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(playerSelection, computerSelection);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(playerSelection, computerSelection);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(playerSelection, computerSelection);
            break;        
    }
    
}

//function that adds player score and computer score
/*function scoreCalc() {
    if (round(playerSelection, computerSelection) == 1) {
        playerScore.innerHTML += 1;
        return console.log('player score increase');
    } else if (round() == 0) {
        computerScore.innerHTML += 1;
        return console.log('computer score increase');
    };
}*/










