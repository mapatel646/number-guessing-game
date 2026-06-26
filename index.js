console.log("Welcome to the Number-Guessing Game!");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// let playAgain = true;

// while(playAgain){
    let target = generateRandomNumber();
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
        let guess = parseInt(answer);

        if(isNaN(guess) || guess < 1 || guess > 100){
            console.log("Invalid input. Please enter a number between 1 and 100.");
            readUserGuess();
        } else{
            console.log("You guessed: " + guess);
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
        }
    });
}