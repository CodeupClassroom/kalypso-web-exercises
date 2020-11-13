// 100 > count back by 5

var x = 2;

while (x < 65536){
    console.log(x);
    x = x * 2;
}

// Ice Cream Cone prompt

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// number of cones to sell ^
// This expression will generate a random number between 1 and 5
console.log("I have this many cones to sell: " + allCones);

do {
   var conesPurchased = Math.floor(Math.random() * 5) + 1;

   if (conesPurchased > allCones){
       console.log("Can't sell you any cones, you wanted " + conesPurchased + ", but all I've got is" + allCones)
   } else {
       allCones = allCones - conesPurchased;
       // 97 = 100 - 3
       console.log(conesPurchased + " is how many you want? No problem! " + allCones + "left to sell!");
   }
} while (allCones > 0)
// ^ keep selling ice cream until we are OUT OF ICE CREAM


console.log("Yeah, I sold all of my ice cream!")



