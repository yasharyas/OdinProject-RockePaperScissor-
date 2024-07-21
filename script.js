const rpc = ["rock", "paper", "scissor"]; // all possible choices haha just 3 ; )

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function getComputerChoice() {
	const randomIndex = getRandomInt(3);
	return rpc[randomIndex];
}

function getUserChoice() {
	const userChoice = prompt(
		"Enter your choice (rock, paper, or scissor):"
	).toLowerCase();

	// Validate user input
	if (!rpc.includes(userChoice)) {
		console.log("Invalid choice! Please enter rock, paper, or scissor.");
		return getUserChoice(); // repititvely ask for user inputs
	}

	console.log("User choice is", userChoice);
	return userChoice;
}

function determineWinner(userChoice, computerChoice) {
	console.log(`Computer chose: ${computerChoice}`);
	if (userChoice === computerChoice) {
		console.log("It's a tie!");
	} else if (
		(userChoice === "rock" && computerChoice === "scissor") ||
		(userChoice === "paper" && computerChoice === "rock") ||
		(userChoice === "scissor" && computerChoice === "paper")
	) {
		console.log("You win!");
	} else {
		console.log("Computer wins!");
	}
}

function playGame() {
	const userChoice = getUserChoice();
	const computerChoice = getComputerChoice();
	determineWinner(userChoice, computerChoice);
}

playGame();
