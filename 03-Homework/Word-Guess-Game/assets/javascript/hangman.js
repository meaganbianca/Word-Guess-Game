// create an array of words
var wordsToGuess =  ["porky", "watermelon", "kirby", "grapefruit", "pocky", "strawberry", "panther", "taffy", "piglet"];

// choose a word randomly
let randWord =      Math.floor(Math.random() * wordsToGuess.length);
let guessWord =     wordsToGuess[randWord];
let correctLetter = [];
let wrongLetter =   [];
// create underscore for every letter of word
let underScores =   [];
let displayUnderScores = document.getElementsByClassName("the-word");

let showUnderScores = () => {
    for (let i = 0; i < guessWord.length; i++) {
        underScores.push("_");
    };
    return underScores;
};

// get user guess
document.addEventListener("keypress", (event) => {
    let keyCode = event.keyCode;
    let keyWord = String.fromCharCode(keyCode);

    // if user guess is correct
    if (guessWord.indexOf(keyWord) > -1) {
        // add to correctLetter array
        correctLetter.push(keyWord);
        // replace underscore with the correct letter guessed
        underScores [ guessWord.indexOf(keyWord) ] = keyWord;
        displayUnderScores[0].innerHTML = underScores.join(" ");
        // check if user guess matches all letter in the word
        if (underScores.join(" ") == guessWord) {
            alert ("you win");
        };
    };
    
    // if guess is wrong push to wrong array
    else {
    wrongLetter.push(keyWord);
    };

});

underScores[0].innerHTML = showUnderScores().join(" ");
