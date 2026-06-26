console.log("Welcome to the Number-Guessing Game!");

// let playAgain = true;

// while(playAgain){
    let target = generateRandomNumber();
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    readUserGuess();
//}

function generateRandomNumber() {
    //1 to 100 inclusive
    let randomNum = Math.floor(Math.random() * 100) + 1;
    console.log("Random number generated = " + randomNum);
    return randomNum;
}

async function readUserGuess(){

    rl.question("Please enter your first guess (between 1 and 100 (inclusive)): ",(answer) =>{
        console.log("You guessed: " + answer);
        let guess = parseInt(answer);

        if(guess < target){
            console.log("Your guess is too low. Try higher!");
            readUserGuess();
        } else if(guess > target){
            console.log("Your guess is too high. Try lower!");
            readUserGuess();
        } else {
            console.log("Congratulations! You guessed the correct number.");
            rl.close();
        }
    });
}