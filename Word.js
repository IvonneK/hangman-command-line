// Coder: Ivonne Komis
// constructor file Word.js should contain all methods to check 
// LETTERS GUESSED versus the RANDOM WORD Selected
var Letter = require('./Letter.js')

// creates new object
function Word(wordToGuess){
	console.log('word.js');
	this.wordToGuess = wordToGuess;
	this.lettersToCheck = [];

	this.buildWord = function(lettersToCheck) {
		wordToGuess = wordToGuess.split("");
		console.log('wordtoguess array', wordToGuess)
		for (var i = 0; i < wordToGuess.length; i++){
			if (lettersToCheck == wordToGuess[i]){
				console.log('lettersToCheck=wordToGuess[i]', lettersToCheck);

				
			}
		}
	}

	console.log('from word.js word ToGuess:', wordToGuess);
	console.log('from word.js length =', wordToGuess.length);
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


