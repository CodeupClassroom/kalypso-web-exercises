//Write a function
// that takes in an integer
// and prints the numbers from 1 to that integer.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

function fizzBuzz(num){
    for (var i=1;i<=num;i++){
        if (i%15===0) {
            console.log("FizzBuzz");
            continue;
        }
        if (i%3===0) {
            console.log("Fizz");
            continue;
        }
        if (i%5===0) {
            console.log("Buzz");
            continue;
        }
        console.log(i);
    }
}

