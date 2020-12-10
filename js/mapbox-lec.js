// Page dropdown and buttons
var zoomSelect = document.getElementById("zoom-select")
zoomSelect.addEventListener("change", function (event) {
    var zoomValue = zoomSelect.options[zoomSelect.selectedIndex].value;
    map.setZoom(parseInt(zoomValue));
})

var styleSelect = document.getElementById("style-select")
styleSelect.addEventListener("change", function (event) {
    var styleValue = styleSelect.options[styleSelect.selectedIndex].value;
    var styleString = "mapbox://styles/mapbox/" + styleValue;
    map.setStyle(styleString);
})

var resetButton = document.getElementById("reset-button")
resetButton.addEventListener("click", function (event) {
    map.setZoom(10);
    map.setCenter([-98.4916, 29.4252]);
    map.setStyle('mapbox://styles/mapbox/streets-v9');
    marker.setLngLat([-98.4916, 29.4252]);
    popup.setText("Codeup");
    //TODO: RESET the dropdown to initial option
    //TODO: RESET style dropdown to initial option
});

/**********************************************
 * 			SETTING UP KEYS.JS
 *********************************************/
// TODO TOGETHER: Open .gitignore and add keys.js. Add keys.js file and import to mapbox html file. Your api keys are stored in keys.js and are added to the .gitignore so they are protected

/**********************************************
 * 			CUSTOMIZING THE MAP
 *********************************************/
// Predefined map styles --> https://docs.mapbox.com/mapbox-gl-js/api/#map
// A map center can be set by passing in the latitude and longitude coordinates of a location as an array [LONGITUDE_VALUE, LATITUDE_VALUE]
// Zoom levels range from 0 up to 24, with 0 being a global view and 24 being the most detailed at street level (the max zoom level depends on the location).

// Initialize the map
mapboxgl.accessToken = mapboxToken; // from key.js file
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-preview-night-v4',
    center: [-98.4916, 29.4252],
    zoom: 9
});

//TODO TOGETHER: Set map to san antonio area using the coordinates [-98.4916, 29.4252]


//TODO: Experiment with different map styles, zoom levels, and centers. You will need to reference the mapbox docs. (~15 minutes)


/**********************************************
 * 					MARKERS
 *********************************************/
// Marker Docs --> https://docs.mapbox.com/mapbox-gl-js/api/#marker
// Markers are specific locations on a map
//Use the .setLngLat() and .addTo() methods to add marker to the map


// TODO TOGETHER: Add a marker to the map using the following coordinates [-98.4916, 29.4260]. This marker will mark the Alamo on our map.
var marker = new mapboxgl.Marker({
    color: 'green',
})
    .setLngLat([-98.4916, 29.4260])
    .addTo(map);
// TODO TOGETHER: Change the color of the marker


// TODO: Experiment with the color, and setting the LngLat
// TODO: Update the marker object to make the marker draggable. *Hint: reference the docs!


/**********************************************
 * 					POPUPS
 *********************************************/
// Popups are the info boxes that appear on a map and may describe a given location.
// Popup docs --> https://docs.mapbox.com/mapbox-gl-js/api/#popup


// TODO TOGETHER: Add a popup to the map over codeup. Set the html as a paragraph that says "Codeup Rocks!"
var popup = new mapboxgl.Popup({
    className: 'codeup-popup'
})
    .setLngLat([-98.48957136173456, 29.42686055035059])
    .setHTML("<p>Codeup Rocks!</p>")
    .addTo(map);

marker.setPopup(popup);
// TODO TOGETHER: Comment out the popup we just added. Add a popup to the alamo marker.
// var alamoPopup = new mapboxgl.Popup()
//     .setHTML("<p>Remember the Alamo!</p>")
//     .addTo(map);
//
// marker.setPopup(alamoPopup);

// TODO: Review the popup docs. What are some additional options we can pass to the popup?
// TODO: Try setting the text by using ".setText()" instead of ".setHTML()"



/**********************************************
 * 					Geocoder
 *********************************************/
// Geocoding Docs --> https://docs.mapbox.com/api/search/#geocoding

let searchString;

// Add an event listener for the search-button 'button'
document.getElementById("search-button").addEventListener("click", function(){
    searchString = prompt("What would you like to search?");
    geocode(searchString, mapboxToken).then(function(result){
        console.log(result);
        // map.setCenter(result); // map.setCenter([-98.48, 29.426])
        map.flyTo({
            center: result,
            zoom: 14,
            speed: 4,
            curve: 1,
        })
        marker.setLngLat(result);
        // map.setZoom(20);

        // Want to add a popup that displays the name of the location at the LONG / LAT coordinates we just found
        reverseGeocode(result, mapboxToken).then(function(placeName) {
            // set the text of the popup to "New York City" (for example)
            console.log("after reverse geocode, the place name is: " + placeName);
            popup.setText(placeName);

            // add the popup to the marker at the search result location
            // marker.setPopup(popup);

        })
    })
});

// TODO TOGETHER: Using the Geocoder helper function, log the coordinates of Codeup and recenter the map to focus on Codeup. Comment out previous map code.



//TODO: Using the geocode method above, add a popup above the marker at Codeup to the map

//TODO: Instead of setCenter try using map.jumpTo()
//TODO: Instead of setCenter try using map.flyTo()



// TODO TOGETHER: Reverse Geocoding: Using the reverse geocoding method, enter the coordinates {lng: -98.4861, lat: 29.4260} to get a physical address for the alamo
// TODO: Reverse geocode coordinates of your choice using the reverse geocode method


