hangman-command-line
# Hangman from the command line
Hangman Game is a node app that uses npm inquirer, chalk, clear and figlet. It requires 2 constructor files (word.js and letter.js). Constructors are used to create a new object without creating redundancies (I call it cloning).<br> 
The app pics a random word from a word list and the number of letters is displayed. The player is then prompted to enter a letter until the word is guessed. The letters are displayed with underscores  '_ o _ _' and underscores are replaced with correct guesses until all letters are guessed. The the app displays the word.

## What it looks like:
![alt text](screenshots/hangmanscreen1.png "Hangman Screen")

## Technologies Used: 
- JavaScript 
- node.js 
- npm modules used:<br>
**inquirer** used to prompt user for input<br>
**chalk** used to change text and background colors<br>
**clear** used to have the ability to clear the screen<br>
**figlet** used to create graphic "HANGMAN" Logo letters and to display the word at the end.

## Built With:
* Sublime Text

## Links: 	
- https://ivonnek.github.io/hangman-command-line/<br>
- https://github.com/IvonneK/hangman-command-line/


## Author: 
**Ivonne Komis**<br>
Member: Rutgers Coding Bootcamp
