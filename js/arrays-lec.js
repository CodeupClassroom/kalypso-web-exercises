// [] // an empty array
//
// [1] // an array with one element
//
// [1, 2, 3, 4, 5] // an array with 5 elements
//
// ["one", 42, [8, 9, 10]] // an array with 3 elements all of different types
// notice that the array above does *not* have 5 elements, rather the last
// element is itself an array with 3 elements in it

var shapes = ['square', 'rectangle', 'circle', 'triangle'];
var iceCreams = ['coffee', 'rocky road', 'chocolate', 'mintchip', 'peanut butter'];

// using .length to see how many elements
console.log(shapes.length); // 4

// array    [ 1, 2, 3, 4 ]
//            ^  ^  ^  ^
//            |  |  |  |
// indices    0  1  2  3

console.log(shapes[0]);
console.log(shapes[1]);
console.log(shapes[2]);
console.log(shapes[3]);
// console.log(shapes[4]);

// the last index is 1 less than array.length
// shapes.length is 4, the last element is at shapes[3]


shapes[4] = 'chevron';
console.log(shapes);
var pets = [
    "Elvis",
    "George",
    "Quark",
    "Pippin",
    "Maduce",
    "Archer",
    "Malu",
    "Lilly",
    "Mittens",
    "Pam",
    "Billy Dee Williams",
    "Ruby",
    "Scooby Doo",
    "Lady Rose"
];

pets.forEach(function(pet, i, arr){
    console.log(pet + " is so pretty.")
})


var kalypso = [
    "Ted McCormick",
    "Natalie East",
    "Walter Smith",
    "Jeremiah Bahan",
    "Jacob Gonzalez",
    "Kole Morgan",
    "Chris Agold",
    "Dan Barzion",
    "Nicholas Wilson",
    "Jason Silbas",
    "Arthur Gamboa",
    "Johnny Fisher",
    "Darlhem Joseph",
    "Ronald Rajski",
    "Donny Anderson",
    "Joshua Talltree",
    "Jon Cortez",
    "Kuwan Barnes",
    "James McBride",
    "Phoebe Njoroge",
    "Caleigh Christensen"
];

var randomStudentIndex = Math.floor(Math.random() * kalypso.length);
var randomStudent = kalypso[randomStudentIndex];
console.log(randomStudent);

// for (var i=0;i<kalypso.length;i++) {
//     console.log("Student: " + kalypso[i]);
//     console.log("Index: " + i);
//     console.log("");
// }

// kalypso.forEach(function (student, i,arr) {
//     console.log("Student: " + student);
//     console.log("Index: " + i);
//     // console.log( arr);
// });


// var printStudent = function (student) {
//     console.log("Student: " + student);
//     // console.log("Index: " + i);
//     console.log("");
// }
// kalypso.forEach(printStudent);

