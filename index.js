console.log("Welcome to the Number-Guessing Game!");

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


function startGame() {
    let target = generateRandomNumber();
    readUserGuess(target);
}

function generateRandomNumber() {
    //1 to 100 inclusive
    let randomNum = Math.floor(Math.random() * 100) + 1;
    console.log("Random number generated!");
    return randomNum;
}

async function readUserGuess(target){

    rl.question("Please enter your first guess (between 1 and 100 (inclusive)): ",(answer) =>{
        let guess = parseInt(answer);

        if(isNaN(guess) || guess < 1 || guess > 100){
            console.log("Invalid input. Please enter a number between 1 and 100.");
            readUserGuess(target);
        } else{
            console.log("You guessed: " + guess);
            if(guess < target){
                console.log("Your guess is too low. Try higher!");
                readUserGuess(target);
            } else if(guess > target){
                console.log("Your guess is too high. Try lower!");
                readUserGuess(target);
            } else if(guess === target){
                console.log("Congratulations! You guessed the correct number.");

                rl.question("Would you like to play again? (yes(y) or no(n)): ",(answer) =>{
                    if(answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y'){
                        startGame();
                    } else {
                        console.log("Thank you for playing! Goodbye!");
                        rl.close();
                    }
                });
            }
        }
    });
}

startGame();