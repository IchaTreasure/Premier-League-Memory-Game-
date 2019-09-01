//retriving the the classes of the game, timer, score and reset
var gamecontainer = document.getElementById("game-container");
var gametimer = document.getElementsByClassName("game-timer");
var gamescore = document.getElementById("game-score");
var resetgame = document.getElementsByClassName("reset-game");

var cardChecked = 0;
var cardNumber; // id of which card was clicked 

var frontcard;
var backcard;

var endgame = false;

var cardIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var cardTextRecord = [];

var cardRecord = [];

var numberOfFlips = 0;

var scoreCounter = 0;

//Fliping the cards
//gamecontainer.addEventListener("click", function(e) { // Listening for click 
document.getElementById("game-container").addEventListener("click", function(e) { // Listening for click 
	var targetElement = e.target.parentElement; //finding out which element was clicked and the parent of that elemnt 
	var numId = targetElement.id;
	if (Number.isInteger(parseInt(numId.replace("back-card", ""), 10))) {
		cardClicked(targetElement.parentElement.id);
	}
	else {
		cardClicked(numId);
	}
});


function cardClicked(cardId) {
	cardNumber = cardId.replace("memory-card", "");
	cardNumber = parseInt(cardNumber, 10);

	if (cardIndex[cardNumber - 1] == 0 && cardChecked == 0 && endgame == false) {

		//frontcard = document.getElementById("front-card" + cardNumber);
		//backcard = document.getElementById("back-card" + cardNumber);
		document.getElementById("front-card" + cardNumber).style.transform = "rotateY(-180deg)";
		document.getElementById("back-card" + cardNumber).style.transform = "rotateY(0deg)";

		cardTextRecord.push(document.getElementById("back-card" + cardNumber).innerHTML);
		cardRecord.push(cardNumber);

		numberOfFlips++;
		cardIndex[cardNumber - 1] = 1;

		if (numberOfFlips == 2) {
			if (cardTextRecord[0] == cardTextRecord[1]) {
				scoreCounter++;
				//gamescore.innerHTML = "Score: " + scoreCounter;
				document.getElementById("game-score").innerHTML = "Score: " + scoreCounter;
				cardTextRecord = [];
				cardRecord = [];

				numberOfFlips = 0;

				if (scoreCounter == 10) {
					clearTimeout();
					setTimeout(function() { showScore(); }, 600);
				}
				return;
			}
			else {
				cardChecked = 1;
				setTimeout(function() { unFlip(); }, 600);
				return;
			}
		}
	}

	if (endgame == true) {
		alert("Game Over, click reset to reshuffle the Board");
	}
}

function unFlip() {
	document.getElementById("front-card" + cardRecord[0]).style.transform = "rotateY(0deg)";
	document.getElementById("back-card" + cardRecord[0]).style.transform = "rotateY(180deg)";
	document.getElementById("front-card" + cardRecord[1]).style.transform = "rotateY(0deg)";
	document.getElementById("back-card" + cardRecord[1]).style.transform = "rotateY(180deg)";

	cardIndex[cardRecord[0] - 1] = 0;
	cardIndex[cardRecord[1] - 1] = 0;
	cardTextRecord = [];
	cardRecord = [];
	numberOfFlips = 0;
	cardChecked = 0;
}

function showScore() {
	endgame = true;

	if (scoreCounter == 10) {
		alert("Congratulations! You won! Your Score is " + scoreCounter);
	}
	else {
		alert("Sorry!!!! You Lost Your score is " + scoreCounter);

	}
}

document.getElementById("reset-game").addEventListener("click", startNewGame);

function startNewGame() {
	window.location.reload();
}
