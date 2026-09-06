const guessInput = document.querySelector(".next-guess");
const guessButton = document.querySelector(".guess-btn");
const message = document.querySelector(".message");
const attemptsText = document.querySelector("#attempts");
const newGameButton = document.querySelector(".new-game");


//generate a random number bwtween 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

guessButton.addEventListener("click", function(){
    let userGuess = Number(guessInput.value);

    attempts++;

    if(userGuess === randomNumber){
        message.textContent = "correct! you guessed it!";
        attemptsText.textContent = `Attempts: ${attempts}`;
    }

    else if(userGuess < randomNumber) {
        message.textContent = "Too low! Try again.";
        attemptsText.textContent = `Attempts: ${attempts}`;
    }
    else {
        message.textContent = "Too high! Try again.";
        attemptsText.textContent = `Attempts: ${attempts}`;
    }
});


//starting a new game
newGameButton.addEventListener("click", function (){
    randomNumber = Math.floor(Math.random() * 100) +1;
    attempts = 0;

    message.textContent = "Make your Guess!";
    attemptsText.textContent = "attempts: 0";

    guessInput.value = "";
})