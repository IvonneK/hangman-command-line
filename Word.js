// Coder: Ivonne Komis
// constructor file Word.js should contain all methods to check 
// LETTERS GUESSED versus the RANDOM WORD Selected
var Letter = require('./Letter.js')

// creates new object
function Word(wordToGuess){
	console.log('inside Word.js');
	this.wordToGuess = wordToGuess;
	this.buildWord = function(letterToCheck) {
		this.letterToCheck = letterToCheck
		console.log('Word.js wordToGuess.buildWord function');
		wordToGuess = wordToGuess.split("");
		console.log('Word.js split wordToGuess ', wordToGuess)
		for (var i = 0; i < wordToGuess.length; i++){
			if (letterToCheck == wordToGuess[i]){
				console.log('word.js letterToCheck=wordToGuess[i]', letterToCheck);
				console.log('word.js need to call function in letter.js to replace - position with letter pushed');
				console.log('word.js', dashes);
				dashToLetter = new Letter(letterToCheck, dashes, i)
			}
		}
	}

	console.log('Word.js word ToGuess:', wordToGuess);
	console.log('Word.js length =', wordToGuess.length);
	var dashes = [];
	// create dashes on the screen start with 1st letter;
	for (var i = 0; i < wordToGuess.length; i++){
		dashes.push(' _ ');
	};
	var displayDashString = dashes.toString()
	displayDashString = displayDashString.replace(/,/g,'');
	console.log('Word has ' + wordToGuess.length + ' letters ' + displayDashString +'\n');


};

// Word.prototype.addLetter = function(l){
// 	// if(this.letters.length < lettersToGuess.length){
// 		this.letters.push(l);
// 	}
// }

module.exports = Word;


