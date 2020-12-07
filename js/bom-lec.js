"use strict";

// After 15000ms, page will reload
var stop = setTimeout(function(){
    location.reload();
},15000);
// clearTimeout(stop); in the console will cancel that

var i = 0;
var callback = function(){
    i++;
    console.log("Hooray!! " + i);
}

// set up to run callback() after 4 seconds
var timeout = setTimeout(callback,
    4000);
// actually, let's cancel that scheduled callback()
clearTimeout(timeout);

// run callback() repeatedly, every 2 seconds
var timeout2 = setInterval(callback, 2000);

// after 10 seconds, cancel the repeating calls
setTimeout(function(){
    clearInterval(timeout2);
},10000);

// this is how we would navigate to another page
// WARNING: our js will not exist once we navigate away!
// window.location = "https://java.codeup.com";