{"filter":false,"title":"script2.js","tooltip":"/Javascript/script2.js","undoManager":{"mark":74,"position":74,"stack":[[{"start":{"row":0,"column":0},"end":{"row":151,"column":29},"action":"insert","lines":["var status = 0;","","var cardPictures = [","    '<img src=\"Images/manunited.jpg\">',","    '<img src=\"Images/manunited.jpg\">',","    '<img src=\"Images/Mancity.png\">',","    '<img src=\"Images/Mancity.png\">',","    '<img src=\"Images/leicester.jpg\">',","    '<img src=\"Images/leicester.jpg\">',","    '<img src=\"Images/Everton.png\">',","    '<img src=\"Images/Everton.png\">',","    '<img src=\"Images/chelsea.png\">',","    '<img src=\"Images/chelsea.png\">',","    '<img src=\"Images/Watford.png\">',","    '<img src=\"Images/Watford.png\">',","    '<img src=\"Images/west-ham.png\">',","    '<img src=\"Images/west-ham.png\">',","    '<img src=\"Images/bournemouth.jpg\">',","    '<img src=\"Images/bournemouth.jpg\">',","    '<img src=\"Images/Burnley.png\">',","    '<img src=\"Images/Burnley.png\">',","    '<img src=\"Images/crystal_pal.png\">',","    '<img src=\"Images/crystal_pal.png\">',","];","","var cardChecked = 0;","var cardNumber; // id of which card was clicked ","","var endgame = false;","var cardIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];","var imageIndex = [];","var cardTextRecord = [];","var cardRecord = [];","var numberOfFlips = 0;","var scoreCounter = 0;","","//Fliping the cards","document.getElementById(\"game-container\").addEventListener(\"click\", function(e) { // Listening for click ","\tvar targetElement = e.target.parentElement; //finding out which element was clicked and the parent of that elemnt ","\tvar numId = targetElement.id;","\tif (Number.isInteger(parseInt(numId.replace(\"back-card\", \"\"), 10))) {","\t\tcardClicked(targetElement.parentElement.id);","\t}","\telse {","\t\tcardClicked(numId);","\t}","});","","function cardClicked(cardId) {","\tcardNumber = cardId.replace(\"memory-card\", \"\");","\tcardNumber = parseInt(cardNumber, 10);","","\tif (cardIndex[cardNumber - 1] == 0 && cardChecked == 0 && endgame == false) {","\t\tdocument.getElementById(\"front-card\" + cardNumber).style.transform = \"rotateY(-180deg)\";","\t\tdocument.getElementById(\"back-card\" + cardNumber).style.transform = \"rotateY(0deg)\";","\t\tcardTextRecord.push(document.getElementById(\"back-card\" + cardNumber).innerHTML);","\t\tcardRecord.push(cardNumber);","\t\tnumberOfFlips++;","\t\tcardIndex[cardNumber - 1] = 1;","\t\tif (numberOfFlips == 2) {","\t\t\tif (cardTextRecord[0] == cardTextRecord[1]) {","\t\t\t\tscoreCounter++;","\t\t\t\tdocument.getElementById(\"game-score\").innerHTML = \"Score: \" + scoreCounter;","\t\t\t\tcardTextRecord = [];","\t\t\t\tcardRecord = [];","","\t\t\t\tnumberOfFlips = 0;","\t\t\t\tif (scoreCounter == 10) {","\t\t\t\t\tclearTimeout();","\t\t\t\t\tsetTimeout(function() { showScore(); }, 600);","\t\t\t\t}","\t\t\t\treturn;","\t\t\t}","\t\t\telse {","\t\t\t\tcardChecked = 1;","\t\t\t\tsetTimeout(function() { unFlip(); }, 600);","\t\t\t\treturn;","\t\t\t}","\t\t}","\t}","","\tif (endgame == true) {","\t\talert(\"Game Over, click reset to reshuffle the Board\");","\t}","}","","function unFlip() {","\tdocument.getElementById(\"front-card\" + cardRecord[0]).style.transform = \"rotateY(0deg)\";","\tdocument.getElementById(\"back-card\" + cardRecord[0]).style.transform = \"rotateY(180deg)\";","\tdocument.getElementById(\"front-card\" + cardRecord[1]).style.transform = \"rotateY(0deg)\";","\tdocument.getElementById(\"back-card\" + cardRecord[1]).style.transform = \"rotateY(180deg)\";","\tcardIndex[cardRecord[0] - 1] = 0;","\tcardIndex[cardRecord[1] - 1] = 0;","\tcardTextRecord = [];","\tcardRecord = [];","\tnumberOfFlips = 0;","\tcardChecked = 0;","}","","function showScore() {","\tendgame = true;","\tif (scoreCounter == 10) {","\t\talert(\"Congratulations! You won! Your Score is \" + scoreCounter + \"/10\");","\t\t//document.getElementById(\"mModal\").style.display = \"show\";","\t}","\telse {","\t\talert(\"Sorry!!!! You Lost Your score is \" + scoreCounter + \"/10\");","\t}","}","","document.getElementById(\"reset-game\").addEventListener(\"click\", startNewGame);","function startNewGame() {","\twindow.location.reload();","}","","function resetBoard(){","\tfor (var i=0; i<20; i++){ // For loop to loop 20 times for all 20 cards ","\t\tif(i == 0) {","\t\t\t// using the Math.random function to generate random nubers","\t\t\tvar randomNum = Math.round(Math.random() * cardPictures.length);","\t\t\t","\t\t\t//while loop to check loop again until the number is between 0-19","\t\t\twhile(randomNum == cardPictures.length){","\t\t\trandomNum = Math.round(Math.random() * cardPictures.length);","\t\t\t}","\t\t\t// after a random number between 0-19 has been generated the image index is updated ","\t\t\t//with the randomNum","\t\t\timageIndex[i] = randomNum;","\t\t}","\t\t\t\telse { //generate unique random values - not in imageIndex array ","\t\t\twhile(status == 0) {","\t\t\t\trandomNum = Math.round(Math.random() * cardPictures.length); //12","\t\t\t\tif(randomNum !== cardPictures.length) {","\t\t\t\t\tfor(var j=0; j<imageIndex.length; j++) {","\t\t\t\t\t\tif(randomNum == imageIndex[j]) { // 3 == 12","\t\t\t\t\t\t\tbreak;","\t\t\t\t\t\t}","\t\t\t\t\t\telse if(j == imageIndex.length - 1) { // 3 == 3","\t\t\t\t\t\t\tstatus = 1;","\t\t\t\t\t\t\timageIndex[i] = randomNum;","\t\t\t\t\t\t}","\t\t\t\t\t}","\t\t\t\t}","\t\t\t}","\t\t}","\t\tstatus = 0;","\t\tdocument.getElementById(\"back-card\" + (i+1)).innerHTML = cardPictures[randomNum]; ","\t\t","\t}","}","","window.onload = resetBoard();"],"id":1}],[{"start":{"row":15,"column":4},"end":{"row":22,"column":41},"action":"remove","lines":["'<img src=\"Images/west-ham.png\">',","    '<img src=\"Images/west-ham.png\">',","    '<img src=\"Images/bournemouth.jpg\">',","    '<img src=\"Images/bournemouth.jpg\">',","    '<img src=\"Images/Burnley.png\">',","    '<img src=\"Images/Burnley.png\">',","    '<img src=\"Images/crystal_pal.png\">',","    '<img src=\"Images/crystal_pal.png\">',"],"id":2},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"remove","lines":["    "]},{"start":{"row":14,"column":37},"end":{"row":15,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":21,"column":53},"end":{"row":21,"column":75},"action":"remove","lines":["0, 0, 0, 0, 0, 0, 0, 0"],"id":3},{"start":{"row":21,"column":52},"end":{"row":21,"column":53},"action":"remove","lines":[" "]},{"start":{"row":21,"column":51},"end":{"row":21,"column":52},"action":"remove","lines":[","]}],[{"start":{"row":32,"column":64},"end":{"row":32,"column":65},"action":"remove","lines":["0"],"id":4},{"start":{"row":32,"column":63},"end":{"row":32,"column":64},"action":"remove","lines":["1"]}],[{"start":{"row":32,"column":63},"end":{"row":32,"column":64},"action":"insert","lines":["6"],"id":5}],[{"start":{"row":42,"column":36},"end":{"row":42,"column":37},"action":"remove","lines":["0"],"id":6},{"start":{"row":42,"column":35},"end":{"row":42,"column":36},"action":"remove","lines":["1"]}],[{"start":{"row":42,"column":35},"end":{"row":42,"column":36},"action":"insert","lines":["5"],"id":7}],[{"start":{"row":42,"column":35},"end":{"row":42,"column":36},"action":"remove","lines":["5"],"id":8}],[{"start":{"row":42,"column":35},"end":{"row":42,"column":36},"action":"insert","lines":["6"],"id":9}],[{"start":{"row":59,"column":25},"end":{"row":59,"column":26},"action":"remove","lines":["0"],"id":10},{"start":{"row":59,"column":24},"end":{"row":59,"column":25},"action":"remove","lines":["1"]}],[{"start":{"row":59,"column":24},"end":{"row":59,"column":25},"action":"insert","lines":["6"],"id":11}],[{"start":{"row":93,"column":22},"end":{"row":93,"column":23},"action":"remove","lines":["0"],"id":12},{"start":{"row":93,"column":21},"end":{"row":93,"column":22},"action":"remove","lines":["1"]}],[{"start":{"row":93,"column":21},"end":{"row":93,"column":22},"action":"insert","lines":["6"],"id":13}],[{"start":{"row":108,"column":18},"end":{"row":108,"column":19},"action":"remove","lines":["0"],"id":14},{"start":{"row":108,"column":17},"end":{"row":108,"column":18},"action":"remove","lines":["2"]}],[{"start":{"row":108,"column":17},"end":{"row":108,"column":18},"action":"insert","lines":["1"],"id":15}],[{"start":{"row":108,"column":18},"end":{"row":108,"column":19},"action":"insert","lines":["2"],"id":16}],[{"start":{"row":108,"column":48},"end":{"row":108,"column":49},"action":"remove","lines":["0"],"id":17},{"start":{"row":108,"column":47},"end":{"row":108,"column":48},"action":"remove","lines":["2"]}],[{"start":{"row":108,"column":47},"end":{"row":108,"column":48},"action":"insert","lines":["1"],"id":18},{"start":{"row":108,"column":48},"end":{"row":108,"column":49},"action":"insert","lines":["2"]}],[{"start":{"row":32,"column":63},"end":{"row":32,"column":64},"action":"remove","lines":["6"],"id":19}],[{"start":{"row":32,"column":63},"end":{"row":32,"column":64},"action":"insert","lines":["1"],"id":20},{"start":{"row":32,"column":64},"end":{"row":32,"column":65},"action":"insert","lines":["0"]}],[{"start":{"row":42,"column":35},"end":{"row":42,"column":36},"action":"remove","lines":["6"],"id":21}],[{"start":{"row":42,"column":35},"end":{"row":42,"column":36},"action":"insert","lines":["1"],"id":22},{"start":{"row":42,"column":36},"end":{"row":42,"column":37},"action":"insert","lines":["0"]}],[{"start":{"row":98,"column":64},"end":{"row":98,"column":65},"action":"remove","lines":["0"],"id":23},{"start":{"row":98,"column":63},"end":{"row":98,"column":64},"action":"remove","lines":["1"]}],[{"start":{"row":98,"column":63},"end":{"row":98,"column":64},"action":"insert","lines":["6"],"id":24}],[{"start":{"row":94,"column":71},"end":{"row":94,"column":72},"action":"remove","lines":["0"],"id":25},{"start":{"row":94,"column":70},"end":{"row":94,"column":71},"action":"remove","lines":["1"]}],[{"start":{"row":94,"column":70},"end":{"row":94,"column":71},"action":"insert","lines":["6"],"id":26}],[{"start":{"row":141,"column":0},"end":{"row":143,"column":29},"action":"remove","lines":["}","","window.onload = resetBoard();"],"id":27},{"start":{"row":141,"column":0},"end":{"row":163,"column":0},"action":"insert","lines":["","\tstartTimer(seconds);","","","}","","window.onload = resetBoard();","","","function startTimer(secs) {","\tdocument.getElementById(\"timer\").innerHTML = \"00:\" + secs; //00:00","\t","\tif(secs == 0) {","\t\t//stop the time out and stop the function as well ","\t\tclearTimeout(countDown);","\t\tdocument.getElementById(\"timer\").innerHTML = \"00:00\";","\t\treturn;","\t}","\tsecs--; //0","\t//recurring function - a function that keeps calling itself with new/updated arguments ","\tcountDown = setTimeout(function(){startTimer(secs);},1000);","}",""]}],[{"start":{"row":27,"column":0},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":28}],[{"start":{"row":27,"column":0},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":29}],[{"start":{"row":28,"column":0},"end":{"row":30,"column":25},"action":"insert","lines":["var countDown; ","var secsInput = 60; ","var seconds = secsInput; "],"id":30}],[{"start":{"row":99,"column":1},"end":{"row":99,"column":61},"action":"remove","lines":["\t//document.getElementById(\"mModal\").style.display = \"show\";"],"id":31},{"start":{"row":99,"column":0},"end":{"row":99,"column":1},"action":"remove","lines":["\t"]},{"start":{"row":98,"column":74},"end":{"row":99,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":158,"column":26},"end":{"row":159,"column":0},"action":"insert","lines":["",""],"id":32},{"start":{"row":159,"column":0},"end":{"row":159,"column":2},"action":"insert","lines":["\t\t"]}],[{"start":{"row":159,"column":2},"end":{"row":159,"column":43},"action":"insert","lines":["setTimeout(function(){showScore();},800);"],"id":33}],[{"start":{"row":3,"column":0},"end":{"row":8,"column":39},"action":"remove","lines":["    '<img src=\"Images/manunited.jpg\">',","    '<img src=\"Images/manunited.jpg\">',","    '<img src=\"Images/Mancity.png\">',","    '<img src=\"Images/Mancity.png\">',","    '<img src=\"Images/leicester.jpg\">',","    '<img src=\"Images/leicester.jpg\">',"],"id":34},{"start":{"row":2,"column":20},"end":{"row":3,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":5,"column":0},"end":{"row":6,"column":37},"action":"remove","lines":["    '<img src=\"Images/chelsea.png\">',","    '<img src=\"Images/chelsea.png\">',"],"id":35},{"start":{"row":4,"column":37},"end":{"row":5,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":6,"column":37},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":36},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":7,"column":4},"end":{"row":10,"column":37},"action":"insert","lines":["'<img src=\"Images/Everton.png\">',","    '<img src=\"Images/Everton.png\">',","    '<img src=\"Images/Watford.png\">',","    '<img src=\"Images/Watford.png\">',"],"id":37}],[{"start":{"row":10,"column":37},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":38},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":11,"column":4},"end":{"row":14,"column":37},"action":"insert","lines":["'<img src=\"Images/Everton.png\">',","    '<img src=\"Images/Everton.png\">',","    '<img src=\"Images/Watford.png\">',","    '<img src=\"Images/Watford.png\">',"],"id":39}],[{"start":{"row":14,"column":37},"end":{"row":15,"column":0},"action":"insert","lines":["",""],"id":40},{"start":{"row":15,"column":0},"end":{"row":15,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":15,"column":4},"end":{"row":18,"column":37},"action":"insert","lines":["'<img src=\"Images/Everton.png\">',","    '<img src=\"Images/Everton.png\">',","    '<img src=\"Images/Watford.png\">',","    '<img src=\"Images/Watford.png\">',"],"id":41}],[{"start":{"row":15,"column":3},"end":{"row":18,"column":37},"action":"remove","lines":[" '<img src=\"Images/Everton.png\">',","    '<img src=\"Images/Everton.png\">',","    '<img src=\"Images/Watford.png\">',","    '<img src=\"Images/Watford.png\">',"],"id":42},{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"remove","lines":[" "]},{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"remove","lines":[" "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"remove","lines":[" "]},{"start":{"row":14,"column":37},"end":{"row":15,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":14,"column":32},"end":{"row":14,"column":33},"action":"remove","lines":["g"],"id":43},{"start":{"row":14,"column":31},"end":{"row":14,"column":32},"action":"remove","lines":["n"]},{"start":{"row":14,"column":30},"end":{"row":14,"column":31},"action":"remove","lines":["p"]},{"start":{"row":14,"column":29},"end":{"row":14,"column":30},"action":"remove","lines":["."]},{"start":{"row":14,"column":28},"end":{"row":14,"column":29},"action":"remove","lines":["d"]},{"start":{"row":14,"column":27},"end":{"row":14,"column":28},"action":"remove","lines":["r"]},{"start":{"row":14,"column":26},"end":{"row":14,"column":27},"action":"remove","lines":["o"]},{"start":{"row":14,"column":25},"end":{"row":14,"column":26},"action":"remove","lines":["f"]},{"start":{"row":14,"column":24},"end":{"row":14,"column":25},"action":"remove","lines":["t"]},{"start":{"row":14,"column":23},"end":{"row":14,"column":24},"action":"remove","lines":["a"]}],[{"start":{"row":14,"column":23},"end":{"row":14,"column":24},"action":"insert","lines":["o"],"id":44},{"start":{"row":14,"column":24},"end":{"row":14,"column":25},"action":"insert","lines":["l"]},{"start":{"row":14,"column":25},"end":{"row":14,"column":26},"action":"insert","lines":["v"]},{"start":{"row":14,"column":26},"end":{"row":14,"column":27},"action":"insert","lines":["e"]},{"start":{"row":14,"column":27},"end":{"row":14,"column":28},"action":"insert","lines":["s"]}],[{"start":{"row":14,"column":28},"end":{"row":14,"column":29},"action":"insert","lines":["."],"id":45},{"start":{"row":14,"column":29},"end":{"row":14,"column":30},"action":"insert","lines":["j"]}],[{"start":{"row":14,"column":30},"end":{"row":14,"column":31},"action":"insert","lines":["p"],"id":46},{"start":{"row":14,"column":31},"end":{"row":14,"column":32},"action":"insert","lines":["g"]}],[{"start":{"row":13,"column":32},"end":{"row":13,"column":33},"action":"remove","lines":["g"],"id":47},{"start":{"row":13,"column":31},"end":{"row":13,"column":32},"action":"remove","lines":["n"]},{"start":{"row":13,"column":30},"end":{"row":13,"column":31},"action":"remove","lines":["p"]},{"start":{"row":13,"column":29},"end":{"row":13,"column":30},"action":"remove","lines":["."]},{"start":{"row":13,"column":28},"end":{"row":13,"column":29},"action":"remove","lines":["d"]},{"start":{"row":13,"column":27},"end":{"row":13,"column":28},"action":"remove","lines":["r"]},{"start":{"row":13,"column":26},"end":{"row":13,"column":27},"action":"remove","lines":["o"]},{"start":{"row":13,"column":25},"end":{"row":13,"column":26},"action":"remove","lines":["f"]},{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"remove","lines":["t"]},{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"remove","lines":["a"]}],[{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"insert","lines":["o"],"id":48},{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"insert","lines":["l"]},{"start":{"row":13,"column":25},"end":{"row":13,"column":26},"action":"insert","lines":["v"]},{"start":{"row":13,"column":26},"end":{"row":13,"column":27},"action":"insert","lines":["e"]},{"start":{"row":13,"column":27},"end":{"row":13,"column":28},"action":"insert","lines":["s"]}],[{"start":{"row":13,"column":28},"end":{"row":13,"column":29},"action":"insert","lines":["."],"id":49},{"start":{"row":13,"column":29},"end":{"row":13,"column":30},"action":"insert","lines":["j"]},{"start":{"row":13,"column":30},"end":{"row":13,"column":31},"action":"insert","lines":["p"]},{"start":{"row":13,"column":31},"end":{"row":13,"column":32},"action":"insert","lines":["g"]}],[{"start":{"row":12,"column":22},"end":{"row":12,"column":29},"action":"remove","lines":["Everton"],"id":51},{"start":{"row":12,"column":22},"end":{"row":12,"column":38},"action":"insert","lines":["Newcastle_United"]}],[{"start":{"row":11,"column":22},"end":{"row":11,"column":29},"action":"remove","lines":["Everton"],"id":52},{"start":{"row":11,"column":22},"end":{"row":11,"column":38},"action":"insert","lines":["Newcastle_United"]}],[{"start":{"row":10,"column":22},"end":{"row":10,"column":29},"action":"remove","lines":["Watford"],"id":53},{"start":{"row":10,"column":22},"end":{"row":10,"column":34},"action":"insert","lines":["Norwich_City"]}],[{"start":{"row":9,"column":22},"end":{"row":9,"column":29},"action":"remove","lines":["Watford"],"id":54},{"start":{"row":9,"column":22},"end":{"row":9,"column":34},"action":"insert","lines":["Norwich_City"]}],[{"start":{"row":8,"column":22},"end":{"row":8,"column":29},"action":"remove","lines":["Everton"],"id":55},{"start":{"row":8,"column":22},"end":{"row":8,"column":38},"action":"insert","lines":["Sheffield_United"]}],[{"start":{"row":7,"column":22},"end":{"row":7,"column":29},"action":"remove","lines":["Everton"],"id":56},{"start":{"row":7,"column":22},"end":{"row":7,"column":38},"action":"insert","lines":["Sheffield_United"]}],[{"start":{"row":13,"column":27},"end":{"row":13,"column":28},"action":"remove","lines":["s"],"id":57},{"start":{"row":13,"column":26},"end":{"row":13,"column":27},"action":"remove","lines":["e"]},{"start":{"row":13,"column":25},"end":{"row":13,"column":26},"action":"remove","lines":["v"]},{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"remove","lines":["l"]},{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"remove","lines":["o"]},{"start":{"row":13,"column":22},"end":{"row":13,"column":23},"action":"remove","lines":["W"]}],[{"start":{"row":13,"column":22},"end":{"row":13,"column":23},"action":"insert","lines":["C"],"id":58},{"start":{"row":13,"column":23},"end":{"row":13,"column":24},"action":"insert","lines":["a"]},{"start":{"row":13,"column":24},"end":{"row":13,"column":25},"action":"insert","lines":["r"]}],[{"start":{"row":13,"column":25},"end":{"row":13,"column":26},"action":"insert","lines":["d"],"id":59},{"start":{"row":13,"column":26},"end":{"row":13,"column":27},"action":"insert","lines":["i"]},{"start":{"row":13,"column":27},"end":{"row":13,"column":28},"action":"insert","lines":["f"]},{"start":{"row":13,"column":28},"end":{"row":13,"column":29},"action":"insert","lines":["f"]}],[{"start":{"row":14,"column":27},"end":{"row":14,"column":28},"action":"remove","lines":["s"],"id":60},{"start":{"row":14,"column":26},"end":{"row":14,"column":27},"action":"remove","lines":["e"]},{"start":{"row":14,"column":25},"end":{"row":14,"column":26},"action":"remove","lines":["v"]},{"start":{"row":14,"column":24},"end":{"row":14,"column":25},"action":"remove","lines":["l"]},{"start":{"row":14,"column":23},"end":{"row":14,"column":24},"action":"remove","lines":["o"]}],[{"start":{"row":14,"column":22},"end":{"row":14,"column":23},"action":"remove","lines":["W"],"id":61}],[{"start":{"row":14,"column":22},"end":{"row":14,"column":23},"action":"insert","lines":["C"],"id":62},{"start":{"row":14,"column":23},"end":{"row":14,"column":24},"action":"insert","lines":["a"]}],[{"start":{"row":14,"column":24},"end":{"row":14,"column":25},"action":"insert","lines":["r"],"id":63},{"start":{"row":14,"column":25},"end":{"row":14,"column":26},"action":"insert","lines":["d"]},{"start":{"row":14,"column":26},"end":{"row":14,"column":27},"action":"insert","lines":["i"]},{"start":{"row":14,"column":27},"end":{"row":14,"column":28},"action":"insert","lines":["f"]},{"start":{"row":14,"column":28},"end":{"row":14,"column":29},"action":"insert","lines":["f"]}],[{"start":{"row":13,"column":22},"end":{"row":13,"column":33},"action":"remove","lines":["Cardiff.jpg"],"id":64},{"start":{"row":13,"column":22},"end":{"row":13,"column":29},"action":"insert","lines":["Cardiff"]}],[{"start":{"row":13,"column":29},"end":{"row":13,"column":30},"action":"insert","lines":["."],"id":65},{"start":{"row":13,"column":30},"end":{"row":13,"column":31},"action":"insert","lines":["p"]},{"start":{"row":13,"column":31},"end":{"row":13,"column":32},"action":"insert","lines":["n"]},{"start":{"row":13,"column":32},"end":{"row":13,"column":33},"action":"insert","lines":["g"]}],[{"start":{"row":14,"column":22},"end":{"row":14,"column":33},"action":"remove","lines":["Cardiff.jpg"],"id":66},{"start":{"row":14,"column":22},"end":{"row":14,"column":29},"action":"insert","lines":["Cardiff"]}],[{"start":{"row":14,"column":29},"end":{"row":14,"column":30},"action":"insert","lines":["."],"id":67},{"start":{"row":14,"column":30},"end":{"row":14,"column":31},"action":"insert","lines":["p"]},{"start":{"row":14,"column":31},"end":{"row":14,"column":32},"action":"insert","lines":["n"]},{"start":{"row":14,"column":32},"end":{"row":14,"column":33},"action":"insert","lines":["g"]}],[{"start":{"row":43,"column":0},"end":{"row":44,"column":0},"action":"insert","lines":["",""],"id":68},{"start":{"row":44,"column":0},"end":{"row":44,"column":1},"action":"insert","lines":["/"]},{"start":{"row":44,"column":1},"end":{"row":44,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":44,"column":2},"end":{"row":44,"column":102},"action":"insert","lines":["https://github.com/MarineMargaco/MEMORY-GAME/blob/cb05fcfa8dcd30c5db7f3d81788dadec6eaf3846/memory.js"],"id":69}],[{"start":{"row":82,"column":0},"end":{"row":83,"column":0},"action":"insert","lines":["",""],"id":70},{"start":{"row":83,"column":0},"end":{"row":83,"column":1},"action":"insert","lines":["/"]},{"start":{"row":83,"column":1},"end":{"row":83,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":83,"column":2},"end":{"row":83,"column":102},"action":"insert","lines":["https://github.com/MarineMargaco/MEMORY-GAME/blob/cb05fcfa8dcd30c5db7f3d81788dadec6eaf3846/memory.js"],"id":71}],[{"start":{"row":111,"column":0},"end":{"row":111,"column":1},"action":"insert","lines":["/"],"id":72},{"start":{"row":111,"column":1},"end":{"row":111,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":111,"column":2},"end":{"row":111,"column":102},"action":"insert","lines":["https://github.com/MarineMargaco/MEMORY-GAME/blob/cb05fcfa8dcd30c5db7f3d81788dadec6eaf3846/memory.js"],"id":73}],[{"start":{"row":110,"column":1},"end":{"row":111,"column":0},"action":"insert","lines":["",""],"id":74}],[{"start":{"row":155,"column":0},"end":{"row":155,"column":1},"action":"insert","lines":["/"],"id":75},{"start":{"row":155,"column":1},"end":{"row":155,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":155,"column":2},"end":{"row":155,"column":102},"action":"insert","lines":["https://github.com/MarineMargaco/MEMORY-GAME/blob/cb05fcfa8dcd30c5db7f3d81788dadec6eaf3846/memory.js"],"id":76}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":155,"column":102},"end":{"row":155,"column":102},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":20,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1567536512770,"hash":"12fc5103bb3dec561a02249d36e7a32a9e4a6d38"}