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

function round (playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        console.log("Tie");
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")){
        console.log("You win! Rock beats Scissors!")
    }
    else if ((playerSelection == "scissors") && (computerSelection == "paper")){
        console.log("You win! Scissors beats Paper!")
    }
    else if (playerSelection == "paper" && (computerSelection == "rock")){
        console.log("You win! Paper beats Rock")
    }
    else if ((playerSelection == "scissors") && (computerSelection == "rock")){
        console.log("You lose! Rock beats Scissors!")
    }
    else if ((playerSelection == "rock") && (computerSelection == "paper")){
        console.log("You lose! Paper beats Rock!")
    }
    else if ((playerSelection == "paper") && (computerSelection == "scissors")){
        console.log("You lose! Scissors beats Paper!")
    }
}
const playerSelection = "rock";
console.log("Player choose:" + playerSelection);
let computerSelection = computerPlay();
console.log("Computer choose:" + computerSelection);
console.log(round(playerSelection, computerSelection));
//computerPlay();



