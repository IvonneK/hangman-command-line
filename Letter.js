// Coder: Ivonne Komis
// constructor file Letter.js should contain all methods to check 
// should control whether or not a letter appears as 
// a "_" or as itself on-screen.
function Letter(letterToCheck, dashes, i){
	console.log('letter.js', letterToCheck + dashes + i);
	this.letterToCheck = letterToCheck;
	this.dashes = dashes;
	this.i = i;

	console.log('letter.js letterToCheck', letterToCheck)
	for (var j = 0; j < this.dashes.length; j++){
		if (this.dashes.indexOf(' _ ') > -1){
			if (j == i){
				this.dashes[j] = letterToCheck;
			}
		}

	}

	var letterDisplay = dashes.toString().replace(/,/g, ' ');
	console.log ('letter.js var letterDisplay', letterDisplay);
	console.log('letter.js dashes value ', dashes)

}



module.exports = Letter;

