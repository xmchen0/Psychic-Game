/// VARIABLES
// define variables and data used at a global level
var winCount = 0;          
var lossCount = 0;                 
var guessesRemaining = 10;
var guessedLetters = [];
var randomLetter = randomLetter;
var resetButton;

// set up array for computer to choose from
var alphabet =
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"
    ,"r","s","t","u","v","w","x","y","z"];


/// FUNCTIONS
//1. set up the computer to pick a random indexed value from array
randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    computerChoice = alphabet[randomLetter];
    console.log(computerChoice);

//2. add a listener to capture the players input
document.onkeyup = function(event) {
    var userGuess = event.key;

    //3. make sure the user selects a value a-z
    var keyPress = /[a-z]/;
    if (!keyPress.test(userGuess)) {
      alert("Error: please enter only letters");
      return false;
    }

    //4. if player guesses correctly, win by 1 and clears used letters array
    if (userGuess == randomLetter) {
    alert("Congratulations! You got it right!");
    winCount++;
    guessedLetters = [];
    guessesRemaining = 11;
    }

    //5. if player guesses incorrectly, reduce guessesRemaining by 1
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(randomLetter);

    if (userGuess !== randomLetter) {
        guessesRemaining--;
    }
    
    //6. when remaining guesses equals zero, lose by 1, reset to zero and used arrays to equal zero
    if (guessesRemaining == 0) {
        alert("Oh no! Computer Won!");
        lossCount++;
        guessedLetters = [];
        guessesRemaining = 10;
    }

    //7. prevent a letter being selected twice 
    if (guessedLetters.indexOf(userGuess) >= 0) {
        } else {
        guessedLetters.push(userGuess);
    }


// storing HTML elements as objects
document.getElementById("winCount").innerHTML = winCount;
document.getElementById("lossCount").innerHTML = lossCount;
document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
document.getElementById("guessedLetters").innerHTML = guessedLetters;

}
