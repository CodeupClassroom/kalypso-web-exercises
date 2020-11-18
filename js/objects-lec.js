"use strict";

(function() {

    // We can create an object with properties like so!
    var kamea = {
        name: "Kamea",
        location: "San Antonio",
        colors: ["Black", "White"],
        species: "Orca",
        date_of_birth: new Date("12/6/2013")
    };

    var tilikum = {};

    console.log(typeof kamea);
    console.log(typeof tilikum);

    // We can also define property values to an object these two ways!
    kamea.age = 6;
    kamea["weight_in_lbs"] = 2400;

    console.log(kamea);


    var babyBeluga = {
        name: "Baby Beluga",
        location: "The Deep Blue Sea",
        colors: ["White"],
        species: "Beluga",
        age: 2,
        date_of_birth: new Date("2/6/2018")
    };

    // We can access the properties but using the following syntax.
    console.log(kamea.age);

    console.log(babyBeluga.name + " in " + babyBeluga["location"] + ", he swim so wild, and he swim so free...");

    babyBeluga.colors.forEach(function(color) {
        console.log(babyBeluga.name + " is the color: " + color);
    });

    console.log(kamea.colors[1]);

    // var babyWhale = {
    //     name: "Baby Beluga",
    //     location: "The Deep Blue Sea",
    //     colors: ["White"],
    //     species: "Beluga",
    //     age: 2,
    //     date_of_birth: new Date("2/6/2018")
    // };

    // var babyWhale = babyBeluga;

    // babyWhale = "Baby Shark";

    // babyBeluga.name = "Baby Shark";
    //
    // babyWhale.name = "Greg So-and-so";
    //
    // console.log(babyWhale);
    // console.log(babyBeluga.name);
    //
    // console.log(babyBeluga === babyWhale);

    babyBeluga.mother = {
        name: "Mommy Beluga",
        age: 20,
        colors: ["White"],
        species: "Beluga",
        location: "The Deep Blue Sea"
    };

    // console.log(babyBeluga.mother.age);

    babyBeluga.happyBirthday = function() {
        console.log("Happy happy birthday, from all the Chili's crew. We wish it was our birthday, so we could be merry too. Wheeee!");
        this.age++;
        console.log(babyBeluga.age);
    };

    babyBeluga.happyBirthday();
    console.log(babyBeluga.age);

    var user = {
        username: "JimLikesEggs",
        password: "ioiuwrbouvwouyvcbosubvohusrtr667546745tdfsibfuywbuwyd",
        avatar_img: 'path/to/file.jpg',
        d_o_b: new Date("3/17/1967")
    };

    var dAndDChar = {
        str: 18,
        dex: 14,
        con: 12,
        cha: 2000
    }

    kamea.singSong = function() {
        return this.name + " in " + this.location + ", he swim so wild and he swim so free. Heaven above, and sea below, and a little " + this.colors + " whale on the go.";
    };

    console.log(kamea.singSong());

})();