// Coder: Ivonne Komis
// game.js will contain the logic of your app. 
// Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word 
// or runs out of guesses.

var inquirer = require('inquirer');
var Word = require('./Word');
var chalk       = require('chalk');
var clear       = require('clear');
var figlet      = require('figlet');

clear();
console.log(
  chalk.red.bgCyan.bold(
    figlet.textSync('HANGMAN', { horizontalLayout: 'full' })
  )
);


// Start of game Random Word and dash setup
var wordList = ['it', 'love', 'hearts'];
console.log('word.js word list', wordList);

var randomWordIndex = Math.floor(Math.random()*wordList.length);
console.log('word.js random index is', randomWordIndex);

var randomWord = wordList[randomWordIndex];

// create a new word by cloning randomWord and its properties
var wordToGuess = new Word(randomWord);
console.log('game.js random word', randomWord);
console.log('game.js new Word cloned from randomWord', wordToGuess);
 

function guessLetterPrompt(){
		console.log('game.js guessLetterPrompt');
		inquirer.prompt([
		  {type: "input",
		    name: "letterGuessed",
		    message: "Type a letter to guess the " + randomWord.length + " Letter Word (or no to exit)"},
		]).then(function(data){
			console.log('game.js wordToGuess',wordToGuess)
				console.log('data', data);
			if (data.letterGuessed != 'no') {
				console.log('game.js: inputdata.letterGuessed not no', data.letterGuessed);
				console.log('game.js: call function in Word.js wordToGuess.buildWord')
			    wordToGuess.buildWord(data.letterGuessed);
			    console.log('games.js word to guess object', wordToGuess);
			    console.log('games.jsword to guess', wordToGuess.wordToGuess);
			    console.log('games.js letter guessed', wordToGuess.letterToCheck);
			    console.log('game.js dashToLetter', dashToLetter.dashes);

			    var checkIfGuessed = dashToLetter.dashes.indexOf(' _ ')
			    if (checkIfGuessed > -1){
			    	console.log('game.js return bc dash found in ', checkIfGuessed);
			    	guessLetterPrompt();
			    }else{
			    	var noDashesMakeString = dashToLetter.dashes.toString()
			    	noDashesMakeString = noDashesMakeString.replace(/,/g, '');
			    	console.log('You guessed Word!! game over', dashToLetter.dashes);
			    	console.log('You guessed Word!! game over', noDashesMakeString);
			    }
		    }
		});
};


guessLetterPrompt();

	
