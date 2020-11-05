// Boolean
var shouldIContinue = true;
console.log(shouldIContinue);
// Also save 'true' as a string
var truthyString = "true";
console.log(truthyString);

// Falsy String
var stringThatIsFalse = "";
// When would we want to know that an empty string = false?
//  Want to grab movie title from OMDB
//   once you (allegedly) get that title
//   you can check to see if you should Print the title to the screen, by checking if the returned value is TRUE or FALSE
//  if you get "" versus getting "Marvel EndGame"

// Number
var myNumber = 42;
console.log(myNumber);

// String
var slogan = "Just do it";
console.log(slogan);

var stringMightWork = 'Nike slogans are \'cool\' to me';
var seconStringMight = "Nike slogans are \"cool\" to me";
console.log(stringMightWork);
console.log(seconStringMight);

// Undefined/Null
var undecided = null;
console.log(undecided);

var x;  // Javascript will not automatically set this to null
console.log(typeof x); // the type is not yet defined

console.log("This is where the null is");
var xyz = null;
console.log(typeof xyz); // this is ACTUALLY assigned null
xyz = 4
console.log("New type of xyz: ");
console.log(typeof xyz);
console.log("Here's the type of null: ");
console.log(typeof null);

var y = 5;
console.log(typeof y); // this type is a number

var z = "Five";
console.log(typeof z); // this type is a string

// console.log(dontKnow);  // declaring a variable, but not setting it


// LOGICAL OPERATORS

var imHungry = true;
var haveNotEaten = false;
var itsLunchTime = true;

// true && false ==> false
// true && true ==> true
// false && false ==> false

var whatIsThisResult = false && false || true;
console.log("false && false || true ==> " + whatIsThisResult);

if( (imHungry && haveNotEaten) || itsLunchTime ) { console.log("Time to eat")}

// if( (true && false) || true ) {console.log("must have resulted in true")}
//
// if( false || true || false || false) {}
//
// if( true )\













