var log = function (arr) {
    // arr is expected to be an array of strings
    arr.forEach(function(item,i){
        console.log(""+ i + " : " + item);
    });
    console.log("");
};

var instruments = [
    "guitar",
    "piano",
    "glockenspiel",
    "trumpet",
    "guitar",
    "cowbell",
    "bass",
    "drumset",
    "guitar",
    "violin"
];

// log(instruments);

// console.log(instruments.push("bagpipes"));;
// log(instruments);

// console.log(instruments.unshift("flute"));;
// log(instruments);

// var removedInstrument = instruments.pop(); // ??? why does it not take an argument?
// log(instruments); // ??? where did the extra element go?
// console.log(removedInstrument);

// var removedInstrument2 = instruments.shift();
// log(instruments);
// console.log(removedInstrument2);

// console.log(instruments.indexOf("cowbell"));
// instruments.push("cowbell");
// console.log(instruments.indexOf("cowbell"));
// console.log(instruments.lastIndexOf("cowbell"));

// console.log(instruments.join(", "));
// var listOfInstruments = instruments.join(", ");
// log(listOfInstruments.split(", ").reverse());

// console.log("guitar".split(""));
// console.log("guitar".split("").indexOf("i"));



// review
var array = ["a","b","c"];
array.push("d"); // ["a","b","c", "d"]
array.pop(); // returns "d"
array.shift(); // returns "a"
array.unshift("a");
array.indexOf("c"); // returns 2
array.lastIndexOf("b"); // returns 1
array.slice(1); // returns ["b","c"];
array.reverse();
array.sort();
array.join(""); // return "abc"
"banana".split("").indexOf("a"); // return 1