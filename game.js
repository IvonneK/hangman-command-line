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
var wordList = ['javascript', 'html', 'css', 'jquery', 'mysql', 'api', 'ajax'];
console.log('game.js word list', wordList);

var randomWordIndex = Math.floor(Math.random()*wordList.length);

var randomWord = wordList[randomWordIndex];
var match = false;
// create a new word by cloning randomWord and its properties
var wordToGuess = new Word(randomWord, match);
// console.log('game.js new Word cloned from randomWord', wordToGuess);
 

function guessLetterPrompt(){
		// console.log('game.js guessLetterPrompt and wordToGuess.matchFound is', wordToGuess.matchFound);
		inquirer.prompt([
		  {type: "input",
		    name: "letterGuessed",
		    message: "Type a letter to guess the " + randomWord.length + " Letter Word (or no to exit)"},
		]).then(function(data){
			// console.log('game.js wordToGuess',wordToGuess)
			// console.log('game.js data', data);
			if (data.letterGuessed != 'no') {
			    wordToGuess.buildWord(data.letterGuessed);
			    // console.log('games.js word to guess object', wordToGuess);
			    // console.log('games.js word to guess wordToGuess.wordToGuess', wordToGuess.wordToGuess);
			    // console.log('games.js letter wordToGuess.letterToCheck', wordToGuess.letterToCheck);
			    // console.log('game.js value wordToGuess.matchFound', wordToGuess.matchFound);
			    // console.log('game.js before if statement');
			    if (wordToGuess.matchFound === false){
			    	console.log('\n [m1.game.js]   SORRY, NO MATCH FOUND try to guess different letter \n');
			    	consdata.letterGuessed
			    	guessLetterPrompt();
			    }
			 	else{
			 		if(wordToGuess.matchFound === true){
				    	// console.log('game.js dashToLetter exists', dashToLetter.dashes);
					    var checkIfGuessed = dashToLetter.dashes.indexOf(' _ ')
					    if (checkIfGuessed > -1){
					    	// console.log('game.js return bc dash found in ', checkIfGuessed);
					    	guessLetterPrompt();
					    }else{
					    	var noDashesMakeString = dashToLetter.dashes.toString()
					    	noDashesMakeString = noDashesMakeString.replace(/,/g, '');
					    	youWin(noDashesMakeString);
					    	
					    }
					}
				};
			}else{
				console.log('\n [m2.game.js]  EXIT HANGMAN GAME, no was entered \n');
				return;
			};
		});
};


// After converting dashes to string and replacing comas display 
function youWin(noDashesMakeString) {
	clear();
	console.log(
	  chalk.red.bgCyan.bold(
	    figlet.textSync(noDashesMakeString, {font: 'standard'})
	  )
	);
	console.log(
		chalk.red.bgCyan.bold('[m3.game.js]  You WIN!!! Congratulations, you guessed the Hangman name of the Technology used ' + noDashesMakeString + '\n' + '\n')
		);  
};


guessLetterPrompt();
