// Break and Continue: Step 2 [while loop option]

while(isNaN(userNum) || (userNum % 2 === 0) || (userNum < 1) || (userNum > 50)){
    var userNum = prompt("Please enter an odd number between 1 and 50")
}

//Break and Continue: Step 3

console.log("Number to skip is:" + userNum);

for(var i = 1; i < 50; i++){
    if (i == userNum){
        console.log("Yikes! Skipping number: " + i);
        continue;
    } else if (i % 2 === 0){
        continue;
    } else {
        console.log("Here's an odd number: " + i);
    }
}


// ~*~ alternate example w/ break used in step 2~*~

do{
//    keep prompting while number is invalid
    var userNumber = Number(prompt("Pick an odd number between 1 and 50"));

    if(userNumber < 1 || userNumber > 50){
        alert("Number is invalid. Please try again.");
    }else if(userNumber % 2 === 0){
        alert(userNumber + " is not odd, please try again.");
    }else if(isNaN(userNumber)){
        alert(userNumber + " is not a number, please try again.");
    } else {
        alert("Number is valid! Thank you!");
        break;
    }
}while(true);

for(var i = 1; i <= 50; i++){
    if(i % 2 === 0){
        continue;
    }

    if(i === userNumber){
        console.log("Yikes! Skipping number: " + i);
    }else {
        console.log("Here is an odd number: " + i);
    }
}