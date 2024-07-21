const rpc = ["rock", "paper", "scissor"]; // all possible choices haha just 3 ; )
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function getComputerChoice() {
	const randomIndex = getRandomInt(3);
	return rpc[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
	const resultElement = document.getElementById("result");
	const userChoiceElement = document.getElementById("user-choice");
	const computerChoiceElement = document.getElementById("computer-choice");

	userChoiceElement.textContent = `Your choice: ${userChoice}`;
	computerChoiceElement.textContent = `Computer's choice: ${computerChoice}`;

	if (userChoice === computerChoice) {
		resultElement.textContent = "It's a tie!";
	} else if (
		(userChoice === "rock" && computerChoice === "scissor") ||
		(userChoice === "paper" && computerChoice === "rock") ||
		(userChoice === "scissor" && computerChoice === "paper")
	) {
		resultElement.textContent = "You win!";
	} else {
		resultElement.textContent = "Computer wins!";
	}
}

function chooseOption(option) {
	const computerChoice = getComputerChoice();
	determineWinner(option, computerChoice);
}
