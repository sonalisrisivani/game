function rollDice() {
    var dice = document.getElementById("dice");
    var randomNumber = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
    dice.textContent = randomNumber; // Update dice with the random number
}
