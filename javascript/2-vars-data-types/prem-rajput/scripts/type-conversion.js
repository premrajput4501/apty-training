
var myString = "420";
var myNumber = 23;
var myBoolean = true;

var stringToNumber = Number(myString);
var stringToBoolean = Boolean(myString);

var numberToString = String(myNumber);
var numberToBoolean = Boolean(myNumber);

var booleanToString = String(myBoolean);
var booleanToNumber = Number(myBoolean);

document.getElementById("string-conversion").innerText = "String '420' to Number: " + stringToNumber + ", to Boolean: " + stringToBoolean;

document.getElementById("number-conversion").innerText = "Number 23 to String: " + numberToString + ", to Boolean: " + numberToBoolean;

document.getElementById("boolean-conversion").innerText = "Boolean true to String: " + booleanToString + ", to Number: " + booleanToNumber;
