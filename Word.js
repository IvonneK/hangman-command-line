// Coder: Ivonne Komis
// constructor file Word.js should contain all methods to check 
// LETTERS GUESSED versus the RANDOM WORD Selected
var Letter = require('./Letter.js')
console.log('word.js');
function Word(letters){
	this.letters = letters;
	console.log(this.letters);
}

Word.prototype.addLetter = function(l){
	if(this.letters.length < randomWord.length){
		this.letters.push(l);
	}
}

module.exports = Word;


