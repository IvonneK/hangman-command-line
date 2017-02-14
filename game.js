// Coder: Ivonne Komis
// game.js will contain the logic of your app. 
// Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word 
// or runs out of guesses.

var inquirer = require('inquirer');
var Word = require('./Word');
var Letter = require('./Letter');
var chalk       = require('chalk');
var clear       = require('clear');
var figlet      = require('figlet');

clear();
console.log(
  chalk.blue.bgCyan.bold(
    figlet.textSync('HANGMAN', { horizontalLayout: 'full' })
  )
);


// Start of game Random Word and dash setup
var wordList = ['it', 'love', 'hearts'];
console.log('word list', wordList);

var randomWordIndex = Math.floor(Math.random()*wordList.length);
console.log('random index is', randomWordIndex);

var randomWord = wordList[randomWordIndex];

// create a new word by cloning randomWord and its properties
var wordFromGuesses = new Word(randomWord);
console.log('new Word cloned from randomWord', wordFromGuesses);
console.log('word is', randomWord);
var numOfLetters = randomWord.length

var dashes = [];
// create dashes on the screen start with 1st letter;
for (var i = 0; i < numOfLetters; i++){
	dashes.push(' _ ');
};

var displayDashString = dashes.toString()
displayDashString = displayDashString.replace(/,/g,'');
console.log('Word has ' + numOfLetters + ' letters ' + displayDashString +'\n');
// 

function guessLetterPrompt(){
	inquirer.prompt([
	  {type: "input",
	    name: "letter",
	    message: "Type a letter to guess the " + numOfLetters + " letter word (or no to exit)"},
	]).then(function(data){
		if (letter != 'no') {
			console.log(data.letter);
			var letters = [];
		    newWord = new Word(letters, data.letter);
			console.log(newWord);
			console.log('before AddLetter');
			Letter();
		    console.log('after AddLetter')
	    }
	});
};

guessLetterPrompt();

	
