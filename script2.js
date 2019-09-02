var status = 0;

var cardPictures = [
    '<img src="Images/manunited.jpg">',
    '<img src="Images/manunited.jpg">',
    '<img src="Images/Mancity.png">',
    '<img src="Images/Mancity.png">',
    '<img src="Images/leicester.jpg">',
    '<img src="Images/leicester.jpg">',
    '<img src="Images/Everton.png">',
    '<img src="Images/Everton.png">',
    '<img src="Images/chelsea.png">',
    '<img src="Images/chelsea.png">',
    '<img src="Images/Watford.png">',
    '<img src="Images/Watford.png">',
];

var cardChecked = 0;
var cardNumber; // id of which card was clicked 

var endgame = false;
var cardIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var imageIndex = [];
var cardTextRecord = [];
var cardRecord = [];
var numberOfFlips = 0;
var scoreCounter = 0;

//Fliping the cards
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
		document.getElementById("front-card" + cardNumber).style.transform = "rotateY(-180deg)";
		document.getElementById("back-card" + cardNumber).style.transform = "rotateY(0deg)";
		cardTextRecord.push(document.getElementById("back-card" + cardNumber).innerHTML);
		cardRecord.push(cardNumber);
		numberOfFlips++;
		cardIndex[cardNumber - 1] = 1;
		if (numberOfFlips == 2) {
			if (cardTextRecord[0] == cardTextRecord[1]) {
				scoreCounter++;
				document.getElementById("game-score").innerHTML = "Score: " + scoreCounter;
				cardTextRecord = [];
				cardRecord = [];

				numberOfFlips = 0;
				if (scoreCounter == 6) {
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
	if (scoreCounter == 6) {
		alert("Congratulations! You won! Your Score is " + scoreCounter + "/10");
		//document.getElementById("mModal").style.display = "show";
	}
	else {
		alert("Sorry!!!! You Lost Your score is " + scoreCounter + "/10");
	}
}

document.getElementById("reset-game").addEventListener("click", startNewGame);
function startNewGame() {
	window.location.reload();
}

function resetBoard(){
	for (var i=0; i<12; i++){ // For loop to loop 12 times for all 20 cards 
		if(i == 0) {
			// using the Math.random function to generate random nubers
			var randomNum = Math.round(Math.random() * cardPictures.length);
			
			//while loop to check loop again until the number is between 0-19
			while(randomNum == cardPictures.length){
			randomNum = Math.round(Math.random() * cardPictures.length);
			}
			// after a random number between 0-19 has been generated the image index is updated 
			//with the randomNum
			imageIndex[i] = randomNum;
		}
				else { //generate unique random values - not in imageIndex array 
			while(status == 0) {
				randomNum = Math.round(Math.random() * cardPictures.length); //12
				if(randomNum !== cardPictures.length) {
					for(var j=0; j<imageIndex.length; j++) {
						if(randomNum == imageIndex[j]) { // 3 == 12
							break;
						}
						else if(j == imageIndex.length - 1) { // 3 == 3
							status = 1;
							imageIndex[i] = randomNum;
						}
					}
				}
			}
		}
		status = 0;
		document.getElementById("back-card" + (i+1)).innerHTML = cardPictures[randomNum]; 
		
	}
}

window.onload = resetBoard();