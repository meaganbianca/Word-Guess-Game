$(document).ready(function() {

    // coppied from fridge game
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    // create an array of words that will be guessed
    var wordsToGuess = ["ABC", "DEFG", "HIJKL"];

    var youGotIt = false;

    var wrongGuess = 5;

    // DO I NEED THIS? DONT THINK IT IS WRITTEN CORRECTLY. CAN I USE THIS AND underScores.push("_"); OR ONLY ONE?
    // function hideLetters(guessLetters) {
    // document.getElementById(guessLetters[i]).style.visibility = "hidden";
    // };

    //Randomly chooses a choice from the wordsToGuess array
    // This is the word needed to be guessed / spelled out.
    var guessWord = wordsToGuess[Math.floor(Math.random() * wordsToGuess.length)];
    let underScores = [];
    for (let i = 0; i < guessWord.length; i++) {
        underScores.push("_");
    };
    // displaying underscores instead of letters
    $("#show").append(underScores.join(" "))

    // letters to guess
    for (var i = 0; i < letters.length; i++) {
        var letterBtn = $("<button>");
        letterBtn.addClass("letter-button letter letter-button-color");
        letterBtn.attr("data-letter", letters[i]);
        letterBtn.text(letters[i]);
        $("#buttons").append(letterBtn);
    };
    // add letterBtn guesses to lettersGuessed
    $(".letter-button").on("click", function() {
        var lettersGuessed = $("<div>");
        var userLetter = $(this).attr("data-letter");        
        lettersGuessed.addClass("letter guess-color");
        lettersGuessed.text(userLetter);
        $("#display").append(lettersGuessed);

        //  seperate the letters in the guessWord
        var guessLetters = guessWord.split("");
        
        for (let i = 0; i < guessLetters.length; i++) {
            console.log(guessLetters[i]);  
            
            if (userLetter === guessLetters[i]) {
                
                underScores[i] =  userLetter;
                // youGotIt = true;

            };

            // {letterBtn guessed correct
            // show on line _ _ _ _ _} ???
            $("#show").text(underScores.join(" "));
        };
    });

        // new game
        $("#start-over").on("click", function() {
        $("#display").empty();
        });



// above this point the letterBtns, lettersGuessed and start over work.
// below this point everthing i added makes the browser site not work.
// i know what steps i have to do i do not now how to write it in code



// show on screen GuessLetters
// replace letters with _ until letterBtn is clicked
// function hideLetters(guessLetters) {
// document.getElementById(guessLetters[i]).style.visibility = "hidden";
// };



//     // if letterBtn guessed is a letter in the arrays[word]
//     if (letterBtn === guessLetters[i]) {
//     // {letterBtn guessed correct
//     // show on line _ _ _ _ _} ???
//     document.getElementById(guessLetters[i]).style.visibility = "visible";
//     };
//     // else if letterBtn guessed is not a letter in the arrays[word]
//     if (!letterBtn == guessLetters[i]) {
//     // {lettersBtn guessed wrong
//     // deduct life/point}
    // var wrongGuess = 5;
    // wrongGuess = wrongGuess - 1; };
    // $("wrong-guesses-left").append(wrongGuess);
//     // need to make a place to put the wrongGuess count
//     var wrongText = document.getElementById("wrong-guess");
//     wrongText.textContent = wrongGuess;



});    