const theNumber = Math.floor(Math.random()) + 1;
let guess = undefined;
console.log("The number is " + theNumber)
while (guess !== theNumber) {
    guess = Number(prompt("Guess a number"));
    if( guess < theNumber ){
        alert("Too low")
    } else if ( guess > theNumber) {
        alert("Too high");
    } else {
        alert ("You got it right.");
    }
}