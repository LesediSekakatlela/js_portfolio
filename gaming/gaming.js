var secret = Math.floor(Math.random() * 10) + 1;
var active = true;

function guessNumber() {
    var guess = prompt("Guess a number between 1 and 10.");
    checkAnswer(guess);
}

function checkAnswer(guess) {
    while (active) {
        if (parseInt(guess) === secret) {
            arlet("Congratulations! Your answer is corret.");
            active = false;
        } else if (parseInt(guess) < secret) {
            alert("Incorrect! Your answer is greater than the answer.");
            guessNumber();
        } else if (parseInt(guess) > secret) {
            alert("Your answer is too high.Try again!");
            guessNumber();
        } else {
            alert("Invailid input!Please enter a number.");
            guessNumber()

        }
    }
}