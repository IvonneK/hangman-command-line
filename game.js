// Coder: Ivonne Komis
// game.js will contain the logic of your app. 
// Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word 
// or runs out of guesses.

var inquirer 	= require('inquirer');
var Word 		= require('./Word');
var chalk       = require('chalk');
var clear       = require('clear');
var figlet      = require('figlet');



hangmanLogo();
// Start of game Random Word and dash setup
var wordList = ['javascript', 'node', 'html', 'css', 'jquery', 'mysql', 'api'];
// console.log('game.js word list', wordList);

var randomWordIndex = Math.floor(Math.random()*wordList.length);
var randomWord = wordList[randomWordIndex];
var match = false;
var guessesLeft = 15; //longest word is 10 positions that is why 15 tries the max.
// create a new word by cloning randomWord and its properties
var wordToGuess = new Word(randomWord, match, guessesLeft);
// console.log('game.js new Word cloned from randomWord', wordToGuess);
 

function hangmanLogo(){
	clear();
	console.log(
	  chalk.red.bgCyan.bold(
	    figlet.textSync('HANGMAN', { horizontalLayout: 'full' })
	  )
	);
};

function guessLetterPrompt(){
	// console.log('game.js guessLetterPrompt and wordToGuess.matchFound is', wordToGuess.matchFound);
	if (wordToGuess.guessesLeft > 0){
		inquirer.prompt([
		  {type: "input",
		    name: "letterGuessed",
		    message: "You have *" + wordToGuess.guessesLeft + "* guesses left.  Type a letter to guess the " + wordToGuess.wordToGuess.length + " Letter Technology (or no to exit)"},
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
			    // if (wordToGuess.matchFound === false){
			    	// console.log('\n [m1.game.js]   SORRY, NO MATCH FOUND try to guess different letter \n');
			    	// console.log(data.letterGuessed)
			    	// guessLetterPrompt();
			    // }
			 	// else{
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
					}else{
						guessLetterPrompt();
					}
				// };
			}else{
				console.log('\n [m1.game.js]  EXIT HANGMAN GAME, no was entered \n');
				return;
			};
		});
	}else{
		console.log("[game.js]...  GAME OVER!!!  YOU have " + wordToGuess.guessesLeft + " Guesses Left. \n");
	};
};

//  display word guessed as a string without commas 
function youWin(noDashesMakeString) {
	clear();
	console.log(
	  chalk.red.bgCyan.bold(
	    figlet.textSync(noDashesMakeString, {font: 'standard'})
	  )
	);
	console.log(
		chalk.red.bgCyan.bold('[m2.game.js]  You WIN!!! Congratulations, you guessed the Hangman name of the Technology used ' + noDashesMakeString + '\n' + '\n')
		);  
};



guessLetterPrompt();
