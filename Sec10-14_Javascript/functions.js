let num = prompt("Enter a number");

if (isNaN(num)) {
    alert(num + " is not a number");
} else {
    alert("factorial of " + num + " is " + factorial(Number(num)));

}
function isEven(num) {
    return num % 2 === 0;
}

function factorial(num){
    let factorial;
 
    if( num === 0 ) {
        return 1;
    } else {
        factorial = num; 
        for (let i = num - 1; i >= 1; i--) {
            factorial *= i;
        }
        return factorial;
    }
}

