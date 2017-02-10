// Coder: Ivonne Komis
// constructor file Word.js should contain all methods to check 
// LETTERS GUESSED versus the RANDOM WORD Selected
function Word(letrs, user, capacity){
	this.letrs = letrs;
	this.user = user;
	this.capacity = capacity;
}

Word.prototype.addLetter = function(l){
	if(this.letrs.length < this.capacity){
		this.letrs.push(l);
	}
}

module.exports = Word;


