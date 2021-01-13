const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 9
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// TODO: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let minThreeLangs = users.filter(function(user) {
    return user.languages.length >= 3;
});
console.log(minThreeLangs);
// ES6
let minThreeLangsES6 = users.filter(user => user.languages.length >= 3);
console.log(minThreeLangsES6);

// TODO: Use .map to create an array of strings where each element is a user's email address
let userEmails = users.map(user => user.email);
console.log(userEmails);

// TODO: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let yearsExp = users.reduce((total, user) => total + user.yearsOfExperience, 0);
console.log(yearsExp + " total years experience, average " + (yearsExp / users.length) + " years experience per user");

// TODO: Use .reduce to get the longest email from the list of users.
let hugeEmail = users.reduce(function(currentLongest, thisUser) {
   if (thisUser.email.length > currentLongest.email.length) {
       // this will return a value to reassign 'currentLongest'
       return thisUser;
   } else {
       // this means that the user being looked at right now does NOT have a longer email, than the running champ
       return currentLongest;
   }
}, users[0]);
console.log("The user with the hugest email is: " + hugeEmail.email);

let longestEmailUser = users.reduce((currentLongest, user) => user.email.length > currentLongest.email.length ? user : currentLongest, users[0]);
console.log(longestEmailUser.name + " has the longest email address, with: " + longestEmailUser.email);

// TODO: Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let userNames = users.reduce((listOfNames, user) => listOfNames === "" ? "Your instructors are: " + user.name : listOfNames + ", "+user.name, "");
console.log(userNames + ".");