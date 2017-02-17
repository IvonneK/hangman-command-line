// Coder: Ivonne Komis
// constructor file Word.js should contain all methods to check 
// LETTERS GUESSED versus the RANDOM WORD Selected

var Letter = require('./Letter.js')

// creates new object
function Word(wordToGuess, matchFound,guessesLeft){
	this.wordToGuess = wordToGuess;
	this.matchFound = matchFound;
	this.guessesLeft = guessesLeft;
	wordToGuess = wordToGuess.split("");
	this.buildWord = function(letterToCheck) {
		this.letterToCheck = letterToCheck;
		this.guessesLeft = this.guessesLeft - 1;
		// console.log('Word.js wordToGuess.buildWord function');
		// console.log('Word.js just split wordToGuess ', wordToGuess)
		for (var i = 0; i < this.wordToGuess.length; i++){
			if (this.letterToCheck == this.wordToGuess[i]){
				// console.log('Word.js letterToCheck=wordToGuess[i]', letterToCheck);
				// console.log('Word.js need to call function in letter.js to replace - position with letter pushed');
				// console.log('Word.js', dashes);
				dashToLetter = new Letter(letterToCheck, dashes, i);
				this.dashToLetter = dashToLetter;
				// console.log('word.js dashToLetter show this.dashToLetter', this.dashToLetter);
				this.matchFound = true;
			};
			
		};
		if ((this.wordToGuess.indexOf(this.letterToCheck) == -1)){
			this.matchFound = false;
			// console.log('matchFound', this.matchFound);			
			noMatchGuesses.push(this.letterToCheck);
			console.log("\n [word.js]...SORRY, NO MATCH FOUND. Incorrect Letters guessed so far " + noMatchGuesses + ". \n");
			return;
		}

	}

	var noMatchGuesses =[];
	// local variable dashed built in word but then passed dashToLetter constructor Letter 
	var dashes = [];
	// create dashes on the screen start with 1st letter;
	for (var i = 0; i < wordToGuess.length; i++){
		dashes.push(' _ ');
	};
	var displayDashString = dashes.toString()
	displayDashString = displayDashString.replace(/,/g,'');
	console.log('\n Can you guess the  ' + wordToGuess.length + ' letter name of the Technology used by members of Rutgers Coding Bootcamp?  ' + displayDashString +'\n');
};

module.exports = Word;


