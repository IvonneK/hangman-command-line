// Coder: Ivonne Komis
// constructor file Letter.js should contain all methods to check 
// should control whether or not a letter appears as 
// a "_" or as itself on-screen.
function Letter(letterGuessed, dashes, i){
	console.log('letter.js', letterGuessed + dashes + i);
	this.letterGuessed = letterGuessed;
	this.dashes = dashes;
	this.i = i;
	console.log('letter.js letterGuessed', letterGuessed)
	for (var j = 0; j < dashes.length; j++){
		if (dashes.indexOf(' _ ') > -1){
			if (j == i){
				dashes[j] = letterGuessed;
			}
		}
	}	
	console.log('letter.js', dashes)

}



module.exports = Letter;