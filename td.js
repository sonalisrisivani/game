function spinBottle() {
    var bottle = document.getElementById("bottle");
    var numberOfPlayers = parseInt(document.getElementById("numberOfPlayers").value);

    if (!numberOfPlayers || numberOfPlayers < 2) {
        alert("Please enter a valid number of players (at least 2)!");
        return;
    }

    var randomSpins = Math.floor(Math.random() * 5) + 2; // Generate a random number of spins between 2 to 6
    var degrees = randomSpins * 360; // Convert spins to degrees

    // Calculate the rotation angle for each player position
    var anglePerPlayer = 360 / numberOfPlayers;
    var randomAngle = Math.floor(Math.random() * 360); // Generate a random angle to determine the landing position
    var stopAngle = Math.round(randomAngle / anglePerPlayer) * anglePerPlayer; // Round to the nearest player position
    var rotation = stopAngle + (randomSpins * 360); // Add full rotations to the stop angle

    // Apply CSS animation to spin the bottle
    bottle.style.animation = "none";
    setTimeout(function() {
        bottle.style.transition = "transform 3s cubic-bezier(0.1, 0.9, 0.2, 1)";
        bottle.style.transform = "rotate(" + rotation + "deg)";
    }, 100);

    // After the animation completes, calculate the result
    setTimeout(function() {
        var result = (stopAngle / anglePerPlayer) + 1; // Calculate the player number where the bottle stops
        document.getElementById("result").textContent = "Player " + result + " has been chosen!";
        bottle.style.transition = "none"; // Stop the transition
    }, 3100);
}
