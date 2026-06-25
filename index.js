console.log("Welcome to the Number-Guessing Game!");

generateRandomNumber();
readUserGuess();
function generateRandomNumber() {
    //0 to 100 inclusive
    randomNum = Math.floor(Math.random() * 101);
    console.log("Random number generated = " + randomNum);
}

function readUserGuess(){
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Please enter your first guess (between 0 and 100 (inclusive)): ",(answer) =>{
        console.log("You guessed: " + answer);
        rl.close();
    });
}