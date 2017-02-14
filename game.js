// Coder: Ivonne Komis
// game.js will contain the logic of your app. 
// Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word 
// or runs out of guesses.

var inquirer = require('inquirer');
var Word = require('./Word');
// var Letter = require('./Letter');
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
console.log('word list', wordList);

var randomWordIndex = Math.floor(Math.random()*wordList.length);
console.log('random index is', randomWordIndex);

var randomWord = wordList[randomWordIndex];

// create a new word by cloning randomWord and its properties
var wordToGuess = new Word(randomWord);
console.log('random word', randomWord);
console.log('new Word cloned from randomWord', wordToGuess);
 

function guessLetterPrompt(){
	inquirer.prompt([
	  {type: "input",
	    name: "letterGuessed",
	    message: "Type a letter to guess the " + randomWord.length + " letter word (or no to exit)"},
	]).then(function(data){
		console.log('wordToGuess',wordToGuess)
			console.log('data', data);
		if (data.letterGuessed != 'no') {
			console.log('after if data.letterGuessed', data.letterGuessed);
		    wordToGuess.buildWord(data.letterGuessed);
			
	    }
	});
};

guessLetterPrompt();

	
