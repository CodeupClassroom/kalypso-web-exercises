"use strict";

$(document).ready(function() {
    // AJAX call to OpenWeather API
    // (casey's handy tip) function getWeather(lat, lon) { ...
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID, // API key
        // q:     "San Antonio, US",
        id:    4726206,
        units: "imperial"
    }).done(function(data) {
        console.log(data);

        // Creating the HTML image element for the forecast icon
        let iconImage = '<img src="http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png" width="50" height="50" />';

        // Add the weather icon to the body of the html
        $("body").append(iconImage);
    });

    // $.get("http://api.openweathermap.org/data/2.5/weather?APPID=" + OPEN_WEATHER_APPID + "&q=" + "San Antonio, US");


});