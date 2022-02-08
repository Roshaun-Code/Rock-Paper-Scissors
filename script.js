//Declaring the score variables
let playerScore = 0;
let computerScore = 0;

const body = document.body;
/*const rock = document.querySelector('#rock')
rock.addEventListener('click', () => {
    console.log('Rock');
})*/

const userSelection = (playerSelection) => {
    console.log(playerSelection);
    
}


//function computerplay generates a random number between 1 to 3 then assigns rock, paper or scissors to the number 
function computerPlay (){
    let computerSelection = Math.floor(Math.random() * 3);

    if( computerSelection === 0) {
        computerSelection = "rock";
    } else if (computerSelection === 1) {
        computerSelection = "scissors";
    } else {
        computerSelection = "paper";
    }
    return computerSelection;
}

//function round calculates whether the computer wins or the player wins
function round (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection){
        return 2;
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")){
        return 1;
    }
    else if ((playerSelection == "scissors") && (computerSelection == "paper")){
        return 1;
    }
    else if (playerSelection == "paper" && (computerSelection == "rock")){
        return 1;
    }
    else if ((playerSelection == "scissors") && (computerSelection == "rock")){
        return 0;
    }
    else if ((playerSelection == "rock") && (computerSelection == "paper")){
        return 0;
    }
    else if ((playerSelection == "paper") && (computerSelection == "scissors")){
        return 0;
    }
}

//game function plays 5 rounds then returns the winner
/*function game(){
    for (let i = 0; i < 5; i++)
    {
        //prompts the user for every iteration and generates new number
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = computerPlay();

        console.log("Player choose:" + " " + playerSelection);
        console.log("Computer choose:" + " " + computerSelection);


        if (round(playerSelection, computerSelection) == 0) {
            computerScore++;
            console.log("You lost the round... :(")
            console.log("\n")
        } else if (round(playerSelection, computerSelection) == 1) {
            playerScore++;
            console.log("You won the round! :D")
            console.log("\n")
        } else if (round(playerSelection, computerSelection) == 2) {
            console.log("Its a draw. :|");
            console.log("\n")
        }
    }

    if( playerScore > computerScore){
        console.log("You have won the game!")
    } else if (playerScore < computerScore){
        console.log("You have lost the game!")
    } else if (playerScore == computerScore) {
        console.log("Tie!")
    }
}*/

//console.log(game());
