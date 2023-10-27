
const rollBtn = document.getElementById('rollBtn');
const diceImages = document.querySelectorAll('.dice img'); // Select all dice images
const player1Result = document.getElementById('player1Result');
const player2Result = document.getElementById('player2Result');
const player3Result = document.getElementById('player3Result');
const player4Result = document.getElementById('player4Result');
const winnerText = document.getElementById('winner');

const images = [
    "images/dice-01.svg",
    "images/dice-02.svg",
    "images/dice-03.svg",
    "images/dice-04.svg",
    "images/dice-05.svg",
    "images/dice-06.svg"
];

// Set initial text content of the winner element to an empty string
winnerText.textContent = '';

function setPlayerName(playerNumber) {
    const inputElement = document.getElementById(`player${playerNumber}Name`);
    const playerName = inputElement.value;
    const playerElement = document.querySelector(`.player:nth-child(${playerNumber}) h2`);
    playerElement.textContent = playerName;
    inputElement.value = '';
}

function rollDie() {
    // Generate random numbers for each player
    const player1Random = Math.floor(Math.random() * 6);
    const player2Random = Math.floor(Math.random() * 6);
    const player3Random = Math.floor(Math.random() * 6);
    const player4Random = Math.floor(Math.random() * 6);

    // Update the src attribute of dice images with the respective random image
    diceImages[0].src = images[player1Random];
    diceImages[1].src = images[player2Random];
    diceImages[2].src = images[player3Random];
    diceImages[3].src = images[player4Random];

    // Update player results with their respective rolls
    player1Result.textContent = `Player 1 rolled ${player1Random + 1}`;
    player2Result.textContent = `Player 2 rolled ${player2Random + 1}`;
    player3Result.textContent = `Player 3 rolled ${player3Random + 1}`;
    player4Result.textContent = `Player 4 rolled ${player4Random + 1}`;

    // Determine the winner based on the highest roll
    const players = [
        { name: document.querySelector('.player:nth-child(1) h2').textContent, roll: player1Random },
        { name: document.querySelector('.player:nth-child(2) h2').textContent, roll: player2Random },
        { name: document.querySelector('.player:nth-child(3) h2').textContent, roll: player3Random },
        { name: document.querySelector('.player:nth-child(4) h2').textContent, roll: player4Random }
    ];
    const maxRoll = Math.max(...players.map(player => player.roll));
    const winners = players.filter(player => player.roll === maxRoll);

    if (winners.length === 1) {
        winnerText.textContent = `Winner: ${winners[0].name}`;
    } else if (winners.length > 1) {
        winnerText.textContent = "It's a draw!";
    } else {
        winnerText.textContent = ""; // No winner
    }
}

rollBtn.addEventListener('click', rollDie);
