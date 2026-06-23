console.log("Welcome to the Number-Guessing Game!");

generateRandomNumber();

function generateRandomNumber() {
    //0 to 100 inclusive
    randomNum = Math.floor(Math.random() * 101);
    console.log("Random number generated = " + randomNum);
}