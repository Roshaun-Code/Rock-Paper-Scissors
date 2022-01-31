function computerPlay (){
    let answer = Math.floor(Math.random() * 3);

    if( answer === 0) {
        answer = "rock";
    } else if (answer === 1) {
        answer = "scissors";
    } else {
        answer = "paper";
    }

    console.log(answer)
}

computerPlay();



