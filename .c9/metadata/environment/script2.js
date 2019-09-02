{"filter":false,"title":"script2.js","tooltip":"/script2.js","undoManager":{"mark":21,"position":21,"stack":[[{"start":{"row":0,"column":0},"end":{"row":151,"column":29},"action":"insert","lines":["var status = 0;","","var cardPictures = [","    '<img src=\"Images/manunited.jpg\">',","    '<img src=\"Images/manunited.jpg\">',","    '<img src=\"Images/Mancity.png\">',","    '<img src=\"Images/Mancity.png\">',","    '<img src=\"Images/leicester.jpg\">',","    '<img src=\"Images/leicester.jpg\">',","    '<img src=\"Images/Everton.png\">',","    '<img src=\"Images/Everton.png\">',","    '<img src=\"Images/chelsea.png\">',","    '<img src=\"Images/chelsea.png\">',","    '<img src=\"Images/Watford.png\">',","    '<img src=\"Images/Watford.png\">',","    '<img src=\"Images/west-ham.png\">',","    '<img src=\"Images/west-ham.png\">',","    '<img src=\"Images/bournemouth.jpg\">',","    '<img src=\"Images/bournemouth.jpg\">',","    '<img src=\"Images/Burnley.png\">',","    '<img src=\"Images/Burnley.png\">',","    '<img src=\"Images/crystal_pal.png\">',","    '<img src=\"Images/crystal_pal.png\">',","];","","var cardChecked = 0;","var cardNumber; // id of which card was clicked ","","var endgame = false;","var cardIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];","var imageIndex = [];","var cardTextRecord = [];","var cardRecord = [];","var numberOfFlips = 0;","var scoreCounter = 0;","","//Fliping the cards","document.getElementById(\"game-container\").addEventListener(\"click\", function(e) { // Listening for click ","\tvar targetElement = e.target.parentElement; //finding out which element was clicked and the parent of that elemnt ","\tvar numId = targetElement.id;","\tif (Number.isInteger(parseInt(numId.replace(\"back-card\", \"\"), 10))) {","\t\tcardClicked(targetElement.parentElement.id);","\t}","\telse {","\t\tcardClicked(numId);","\t}","});","","function cardClicked(cardId) {","\tcardNumber = cardId.replace(\"memory-card\", \"\");","\tcardNumber = parseInt(cardNumber, 10);","","\tif (cardIndex[cardNumber - 1] == 0 && cardChecked == 0 && endgame == false) {","\t\tdocument.getElementById(\"front-card\" + cardNumber).style.transform = \"rotateY(-180deg)\";","\t\tdocument.getElementById(\"back-card\" + cardNumber).style.transform = \"rotateY(0deg)\";","\t\tcardTextRecord.push(document.getElementById(\"back-card\" + cardNumber).innerHTML);","\t\tcardRecord.push(cardNumber);","\t\tnumberOfFlips++;","\t\tcardIndex[cardNumber - 1] = 1;","\t\tif (numberOfFlips == 2) {","\t\t\tif (cardTextRecord[0] == cardTextRecord[1]) {","\t\t\t\tscoreCounter++;","\t\t\t\tdocument.getElementById(\"game-score\").innerHTML = \"Score: \" + scoreCounter;","\t\t\t\tcardTextRecord = [];","\t\t\t\tcardRecord = [];","","\t\t\t\tnumberOfFlips = 0;","\t\t\t\tif (scoreCounter == 10) {","\t\t\t\t\tclearTimeout();","\t\t\t\t\tsetTimeout(function() { showScore(); }, 600);","\t\t\t\t}","\t\t\t\treturn;","\t\t\t}","\t\t\telse {","\t\t\t\tcardChecked = 1;","\t\t\t\tsetTimeout(function() { unFlip(); }, 600);","\t\t\t\treturn;","\t\t\t}","\t\t}","\t}","","\tif (endgame == true) {","\t\talert(\"Game Over, click reset to reshuffle the Board\");","\t}","}","","function unFlip() {","\tdocument.getElementById(\"front-card\" + cardRecord[0]).style.transform = \"rotateY(0deg)\";","\tdocument.getElementById(\"back-card\" + cardRecord[0]).style.transform = \"rotateY(180deg)\";","\tdocument.getElementById(\"front-card\" + cardRecord[1]).style.transform = \"rotateY(0deg)\";","\tdocument.getElementById(\"back-card\" + cardRecord[1]).style.transform = \"rotateY(180deg)\";","\tcardIndex[cardRecord[0] - 1] = 0;","\tcardIndex[cardRecord[1] - 1] = 0;","\tcardTextRecord = [];","\tcardRecord = [];","\tnumberOfFlips = 0;","\tcardChecked = 0;","}","","function showScore() {","\tendgame = true;","\tif (scoreCounter == 10) {","\t\talert(\"Congratulations! You won! Your Score is \" + scoreCounter + \"/10\");","\t\t//document.getElementById(\"mModal\").style.display = \"show\";","\t}","\telse {","\t\talert(\"Sorry!!!! You Lost Your score is \" + scoreCounter + \"/10\");","\t}","}","","document.getElementById(\"reset-game\").addEventListener(\"click\", startNewGame);","function startNewGame() {","\twindow.location.reload();","}","","function resetBoard(){","\tfor (var i=0; i<20; i++){ // For loop to loop 20 times for all 20 cards ","\t\tif(i == 0) {","\t\t\t// using the Math.random function to generate random nubers","\t\t\tvar randomNum = Math.round(Math.random() * cardPictures.length);","\t\t\t","\t\t\t//while loop to check loop again until the number is between 0-19","\t\t\twhile(randomNum == cardPictures.length){","\t\t\trandomNum = Math.round(Math.random() * cardPictures.length);","\t\t\t}","\t\t\t// after a random number between 0-19 has been generated the image index is updated ","\t\t\t//with the randomNum","\t\t\timageIndex[i] = randomNum;","\t\t}","\t\t\t\telse { //generate unique random values - not in imageIndex array ","\t\t\twhile(status == 0) {","\t\t\t\trandomNum = Math.round(Math.random() * cardPictures.length); //12","\t\t\t\tif(randomNum !== cardPictures.length) {","\t\t\t\t\tfor(var j=0; j<imageIndex.length; j++) {","\t\t\t\t\t\tif(randomNum == imageIndex[j]) { // 3 == 12","\t\t\t\t\t\t\tbreak;","\t\t\t\t\t\t}","\t\t\t\t\t\telse if(j == imageIndex.length - 1) { // 3 == 3","\t\t\t\t\t\t\tstatus = 1;","\t\t\t\t\t\t\timageIndex[i] = randomNum;","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t}","\t\tstatus = 0;","\t\tdocument.getElementById(\"back-card\" + (i+1)).innerHTML = cardPictures[randomNum]; ","\t\t","\t}","}","","window.onload = resetBoard();"],"id":1}],[{"start":{"row":15,"column":4},"end":{"row":22,"column":41},"action":"remove","lines":["'<img src=\"Images/west-ham.png\">',","    '<img src=\"Images/west-ham.png\">',","    '<img src=\"Images/bournemouth.jpg\">',","    '<img src=\"Images/bournemouth.jpg\">',","    '<img src=\"Images/Burnley.png\">',","    '<img src=\"Images/Burnley.png\">',","    '<img src=\"Images/crystal_pal.png\">',","    '<img src=\"Images/crystal_pal.png\">',"],"id":2},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"remove","lines":["    "]},{"start":{"row":14,"column":37},"end":{"row":15,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":21,"column":53},"end":{"row":21,"column":75},"action":"remove","lines":["0, 0, 0, 0, 0, 0, 0, 0"],"id":3},{"start":{"row":21,"column":52},"end":{"row":21,"column":53},"action":"remove","lines":[" "]},{"start":{"row":21,"column":51},"end":{"row":21,"column":52},"action":"remove","lines":[","]}],[{"start":{"row":32,"column":64},"end":{"row":32,"column":65},"action":"remove","lines":["0"],"id":4},{"start":{"row":32,"column":63},"end":{"row":32,"column":64},"action":"remove","lines":["1"]}],[{"start":{"row":32,"column":63},"end":{"row":32,"column":64},"action":"insert","lines":["6"],"id":5}],[{"start":{"row":42,"column":36},"end":{"row":42,"column":37},"action":"remove","lines":["0"],"id":6},{"start":{"row":42,"column":35},"end":{"row":42,"column":36},"action":"remove","lines":["1"]}],[{"start":{"row":42,"column":35},"end":{"row":42,"column":36},"action":"insert","lines":["5"],"id":7}],[{"start":{"row":42,"column":35},"end":{"row":42,"column":36},"action":"remove","lines":["5"],"id":8}],[{"start":{"row":42,"column":35},"end":{"row":42,"column":36},"action":"insert","lines":["6"],"id":9}],[{"start":{"row":59,"column":25},"end":{"row":59,"column":26},"action":"remove","lines":["0"],"id":10},{"start":{"row":59,"column":24},"end":{"row":59,"column":25},"action":"remove","lines":["1"]}],[{"start":{"row":59,"column":24},"end":{"row":59,"column":25},"action":"insert","lines":["6"],"id":11}],[{"start":{"row":93,"column":22},"end":{"row":93,"column":23},"action":"remove","lines":["0"],"id":12},{"start":{"row":93,"column":21},"end":{"row":93,"column":22},"action":"remove","lines":["1"]}],[{"start":{"row":93,"column":21},"end":{"row":93,"column":22},"action":"insert","lines":["6"],"id":13}],[{"start":{"row":108,"column":18},"end":{"row":108,"column":19},"action":"remove","lines":["0"],"id":14},{"start":{"row":108,"column":17},"end":{"row":108,"column":18},"action":"remove","lines":["2"]}],[{"start":{"row":108,"column":17},"end":{"row":108,"column":18},"action":"insert","lines":["1"],"id":15}],[{"start":{"row":108,"column":18},"end":{"row":108,"column":19},"action":"insert","lines":["2"],"id":16}],[{"start":{"row":108,"column":48},"end":{"row":108,"column":49},"action":"remove","lines":["0"],"id":17},{"start":{"row":108,"column":47},"end":{"row":108,"column":48},"action":"remove","lines":["2"]}],[{"start":{"row":108,"column":47},"end":{"row":108,"column":48},"action":"insert","lines":["1"],"id":18},{"start":{"row":108,"column":48},"end":{"row":108,"column":49},"action":"insert","lines":["2"]}],[{"start":{"row":32,"column":63},"end":{"row":32,"column":64},"action":"remove","lines":["6"],"id":19}],[{"start":{"row":32,"column":63},"end":{"row":32,"column":64},"action":"insert","lines":["1"],"id":20},{"start":{"row":32,"column":64},"end":{"row":32,"column":65},"action":"insert","lines":["0"]}],[{"start":{"row":42,"column":35},"end":{"row":42,"column":36},"action":"remove","lines":["6"],"id":21}],[{"start":{"row":42,"column":35},"end":{"row":42,"column":36},"action":"insert","lines":["1"],"id":22},{"start":{"row":42,"column":36},"end":{"row":42,"column":37},"action":"insert","lines":["0"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":27,"column":0},"end":{"row":27,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":15,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1567421568272,"hash":"45aad8ea86df01153b54df74685d22a2b377c143"}