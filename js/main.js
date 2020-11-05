"use strict";

console.log("Hello, from the Javascript console!");
console.log("Hello from the other side.");

// alert("You just won a new iPad!");
// alert("Just kidding, of course, email and zip code, please!");
//
// var iPodWinner = "You just won an iPod 5G";
//
// alert(iPodWinner);

// the following line will show the OK/CANCEL confirm dialog
var confirmed = confirm('Are you sure you want to do XYZ?');
console.log(confirmed); // will be either true or false


var userInput = prompt('Please type something:');
console.log('The user entered: ' + userInput);