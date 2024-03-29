const playerOneName = "You";
const playerTwoName = "The Computer";

function getComputerChoice() {
	switch(Math.floor(Math.random() * 2)) {
		case 0: return 'rock';
		case 1: return 'paper';
		case 2: return 'scissors';
	}
}

let buttons = document.querySelectorAll('#user-input > button');
for (const btn of buttons) {
	btn.addEventListener('click', playGame);
}

function playRound(player1, player2) {
	player1 = player1.toLowerCase();
	player2 = player2.toLowerCase();

	if (player1 === player2) {
		return {winner: 0, message: `${playerOneName} and ${playerTwoName} tie with ${player1}`};
	} else if(player1 === 'rock' && player2 === 'scissors'
		|| player1 === 'paper' && player2 === 'rock'
		|| player1 === 'scissors' && player2 === 'paper') {
		return {winner: 1, message: `${playerOneName} won! ${player1} beats ${player2}`};
	} else {
		return {winner: 2, message: `${playerTwoName} won! ${player2} beats ${player1}`};
	}
}

let roundsRemaining = 5;

let playerOneWins = 0;
let playerTwoWins = 0;

function playGame(userButtonElement) {
	document.querySelector('#game-results > p').textContent = `There are ${--roundsRemaining} more rounds in this game`;

	let playerSelection = userButtonElement.target.textContent;
	let computerSelection = getComputerChoice();

	let results = playRound(playerSelection, computerSelection);

	document.querySelector('#round-results > p').textContent = results.message;

	if (results.winner === 1) {
		playerOneWins += 1;
	} else if (results.winner === 2) {
		playerTwoWins += 1;
	}

	if (roundsRemaining === 0) {
		document.querySelector('#game-results > p').textContent
			= (playerOneWins === playerTwoWins)
			? "You both tied!"
			: `${(playerOneWins > playerTwoWins) ? playerOneName : playerTwoName} won!`;

		roundsRemaining = 5;
		playerOneWins = 0;
		playerTwoWins = 0;
	}
}

