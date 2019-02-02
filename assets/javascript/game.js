/* UofT Bootcamp 2019 - Psychic Game */

/// VARIABLES
// define variables and data used at a global level
var winCount = 0;          
var lossCount = 0;                 
var guessesRemaining = 9;
var guessedLetters = [];
var alphabet =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z"];


/// FUNCTIONS
//1. assign local variable for computer pick a random value from letters array
randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    computerChoice = alphabet[randomLetter];
    

//2. add a listener to capture the players input
document.onkeyup = function(event) {
    var userGuess = event.key;
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();

//3. make sure the user selects a value a-z
var keyPress = /[a-z]/;
    if (!keyPress.test(userGuess)) {
      alert("Ops! Please enter only letters");
      return false;
    }

//4. if player guesses correctly, win by 1 and clear used letters array
if (userGuess === randomLetter) {
    alert("Congratulations! You got it right!");
    winCount++;
    guessedLetters = [];
    guessesRemaining = 9;
    }

//5. if player guesses incorrectly, reduce guessesRemaining by 1 and add new item to the array
if (userGuess != randomLetter) {
    guessesRemaining--;
    guessedLetters.push(userGuess);
    }
    
//6. if guessesRemaining is less than 1, reset to zero and clear used letters array
if (guessesRemaining < 1) {
    alert("Oh no! Computer Won!");
    lossCount++;
    guessedLetters = [];
    guessesRemaining = 9;
    }

// storing HTML elements as objects
document.getElementById("winCount").innerHTML = winCount;
document.getElementById("lossCount").innerHTML = lossCount;
document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
document.getElementById("guessedLetters").innerHTML = guessedLetters;

}
