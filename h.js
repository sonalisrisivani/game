var coins = [];
var maxCoins = 90;
var coinTable = document.getElementById("coinTable");

function generateCoin() {
    if (coins.length >= maxCoins) {
        alert("All coins have been generated!");
        return;
    }

    var randomCoin;
    do {
        randomCoin = Math.floor(Math.random() * maxCoins) + 1;
    } while (coins.includes(randomCoin));

    coins.push(randomCoin);
    coins.sort(function(a, b) { return a - b; }); // Sort coins in ascending order
    displayCoins();
}

function displayCoins() {
    coinTable.innerHTML = ""; // Clear previous content
    var rows = Math.ceil(maxCoins / 10); // Calculate number of rows needed
    var coinIndex = 0;
    for (var i = 0; i < rows; i++) {
        var row = coinTable.insertRow();
        for (var j = 0; j < 10; j++) {
            var cell = row.insertCell();
            if (coinIndex < coins.length) {
                cell.textContent = coins[coinIndex++];
            }
        }
    }
}

function stop() {
    alert("Game stopped by user!");
}

