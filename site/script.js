const playerOneName = "You";
const playerTwoName = "The Computer";

function getComputerChoice() {
	switch(Math.floor(Math.random() * 2)) {
		case 0: return 'rock';
		case 1: return 'paper';
		case 2: return 'scissors';
	}
}

function getUserChoice() {
	let validChoice = false;
	do {
		var choice = prompt("Rock Paper Scissors", getComputerChoice()).toLowerCase();
		validChoice = (choice == 'rock' || choice == 'paper' || choice == 'scissors');

	} while (!validChoice)
	return choice;
}

function playRound(player1, player2) {
	player1 = player1.toLowerCase();
	player2 = player2.toLowerCase();

	if (player1 === player2) {
		return {winner: 0, message: `${playerOneName} and ${playerTwoName} tie with ${player1}`};
	} else if(player1 === 'rock' && player2 === 'scissors'
		|| player1 === 'scissors' && player2 === 'paper') {
		return {winner: 1, message: `${playerOneName} wins! ${player1} beats ${player2}`};
	} else {
		return {winner: 2, message: `${playerTwoName} wins! ${player2} beats ${player1}`};
	}
}

function playGame() {
	let roundsRemaining = 5;

	let playerOneWins = 0;
	let playerTwoWins = 0;

	while (roundsRemaining > 0) {
		let playerSelection = getUserChoice();
		let computerSelection = getComputerChoice();

		let results = playRound(playerSelection, computerSelection);

		console.log(results.message);
		roundsRemaining -= 1;

		if (results.winner === 1) {
			playerOneWins += 1;
		} else if (results.winner === 2) {
			playerTwoWins += 1;
		}
	}

	if (playerOneWins === playerTwoWins) {
		console.log("You both tied!");
	} else {
		console.log(`${(playerOneWins > playerTwoWins) ? playerOneName : playerTwoName} won!`);
	}
}

playGame();
