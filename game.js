// Coder: Ivonne Komis
// game.js will contain the logic of your app. 
// Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word 
// or runs out of guesses.

var inquirer = require('inquirer');
var Letter = require('./Letter');
var Word = require('./Word');

var newWord;

inquirer.prompt([
  {type: "input",
    name: "username",
    message: "What's your name?"},
  {type: "input",
    name: "capacity",
    message: "Enter a maximum number of letters"},


]).then(function(data){
	  var letters = [];
      newWords = new Word([], data.username, data.capacity);

      askToAddLetter();
});

function newLetter() {
	inquirer.prompt([
		{type: "input",
			name: 'addLetter',
			message: "Enter Letter to guess the hangman word"}

	]).then(function(data){
		var newLetter = new Letter(data.addLetter);
		newWord.addLetter(newLetter);

		console.log(newWord);
		askToAddLetter();		
	});
};

function asktoAddLetter(){
	inquirer.prompt([
		{type: 'input',
			name: 'addLetters',
			message: 'Do you want to add letters to the word?'}

	]).then(function(data){
		if (data.addLetters == 'yes') {
			newLetter();
		}else{
			console.log(newWord);
		}
	});
}