// Create a function named showMultiplicationTable that accepts a number and console.logs
// the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num){
    for (var i = 1; i <= 10; i++){
        console.log(num + " x " + i + " = " + (num * i));
    }
}

//Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200
// and output to the console whether each number is odd or even.

//in the loop > give me TEN random numbers > each loop starts by randomly generating a num
for(var i = 0; i < 10; i++){
    var randomNum = Math.floor(Math.random() * (200 - 20) + 20)
    if (randomNum % 2 !== 0) {
        console.log(randomNum + " is Odd");
    } else {
        console.log(randomNum + " is Even")
    }

}

//Create a for loop that prints out the desired pyramid
// Nested [interior] loop:

for (var outer = 1; outer <= 9; outer++){
    var output = '';

    for(var inner = 1; inner <= outer; inner++){
        output = output + outer;
    }

    console.log(output);
}

//.toString > .repeat pyramid

for(var i = 1; i <= 9; i++){
    console.log(i.toString().repeat(i));
}

// -5 output > loop

for(var i = 100; i >= 5; i -= 5){
    console.log(i);
}

