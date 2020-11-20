"use strict";
(function() {

    let jumpValue = 20;

    let outerBox = document.getElementById("the-outer-box");
    let outerBoxStyle = getComputedStyle(outerBox);
    let innerBox = document.getElementById("the-inner-box");
    let innerBoxStyle = getComputedStyle(innerBox);
    let widthValue = document.getElementById("width-value");
      widthValue.innerText = getCurrentValue("width");
    let heightValue = document.getElementById("height-value");
      heightValue.innerText = getCurrentValue("height");
    let paddingValue = document.getElementById("padding-value");
      paddingValue.innerText = getCurrentValue("padding");
    let marginValue = document.getElementById("margin-value");
      marginValue.innerText = getCurrentValue("margin");

    function getCurrentValue(attribute) {
        // attribute will be "width", "height", "margin", "padding"
        switch (attribute) {
            case "width":
                return outerBox.clientWidth + "px";
            case "height":
                return outerBox.clientHeight + "px";
            case "padding":
                console.log("outer box padding: " + outerBoxStyle.padding);
                return parseInt(outerBoxStyle.paddingTop) + "px";
            case "margin":
                console.log("inner box margin: " + innerBoxStyle.margin);
                return parseInt(innerBoxStyle.marginTop) + "px";
            default:
                console.error("Didn't send in a proper attribute to the getCurrentValue() function");
                return null;
        }
    }

    // Listeners for each button

    // Width
    document.getElementById("width-control-up").addEventListener("click", function() {
        // increase width
        let width = outerBox.clientWidth;
        outerBox.style.width = (width+jumpValue) + "px";
        widthValue.innerText = getCurrentValue("width");
    });
    document.getElementById("width-control-down").addEventListener("click", function() {
        // decrease width
        let width = outerBox.clientWidth;
        outerBox.style.width = (width-jumpValue) + "px";
        widthValue.innerText = getCurrentValue("width");
    });

    // Height
    document.getElementById("height-control-up").addEventListener("click", function() {
        // increase height
        let height = outerBox.clientHeight;
        outerBox.style.height = (height+jumpValue) + "px";
        heightValue.innerText = getCurrentValue("height");
    });
    document.getElementById("height-control-down").addEventListener("click", function() {
        // decrease height
        let height = outerBox.clientHeight;
        outerBox.style.height = (height-jumpValue) + "px";
        heightValue.innerText = getCurrentValue("height");
    });

    // Padding
    document.getElementById("padding-control-up").addEventListener("click", function() {
        // increase padding
        let padding = isNaN(parseInt(outerBoxStyle.paddingTop)) ? 0 : parseInt(outerBoxStyle.paddingTop);
        outerBox.style.paddingTop = (padding+jumpValue) + "px";
        outerBox.style.paddingBottom = (padding+jumpValue) + "px";
        outerBox.style.paddingLeft = (padding+jumpValue) + "px";
        outerBox.style.paddingRight = (padding+jumpValue) + "px";
        paddingValue.innerText = getCurrentValue("padding");

    });
    document.getElementById("padding-control-down").addEventListener("click", function() {
        // decrease padding
        let padding = isNaN(parseInt(outerBoxStyle.paddingTop)) ? 0 : parseInt(outerBoxStyle.paddingTop);
        outerBox.style.paddingTop = (padding-jumpValue) + "px";
        outerBox.style.paddingBottom = (padding-jumpValue) + "px";
        outerBox.style.paddingLeft = (padding-jumpValue) + "px";
        outerBox.style.paddingRight = (padding-jumpValue) + "px";
        paddingValue.innerText = getCurrentValue("padding");
    });

    // Margin
    document.getElementById("margin-control-up").addEventListener("click", function() {
        // increase margin
        let margin = isNaN(parseInt(innerBox.margin)) ? 0 : parseInt(innerBox.margin);
        innerBox.style.margin = (margin+jumpValue) + "px";
        marginValue.innerText = getCurrentValue("margin");

    });
    document.getElementById("margin-control-down").addEventListener("click", function() {
        // decrease margin
        let margin = isNaN(parseInt(innerBox.marginTop)) ? 0 : parseInt(innerBox.marginTop);
        innerBox.style.margin = (margin-jumpValue) + "px";
        marginValue.innerText = getCurrentValue("margin");
    });

})()