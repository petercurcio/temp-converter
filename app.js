let debug = false;

if (debug) { console.log("is this working...?"); }

// (function(){
//   document.getElementById("main-title").innerHTML = "New Title";
//   console.log("this ran, too...");
// })();

let temp = document.getElementById("temp-f").value;
if (debug) { console.log("temp out here is: " + temp); }

//let newTemp;

function convertFarenheitToCelsius() {
  // get input temp
  // apply formula
  // return converted value
  // T(°C) = (T(°F) - 32) × 5/9
  let temp = document.getElementById("temp-f").value;
  //return (temp - 32) * 5/9
  if (debug) { console.log((temp - 32) * 5/9); }
  //console.log("temp is: " + temp);
  newTemp = ((temp - 32) * 5/9).toPrecision(3);
  if (debug) { console.log("newTemp is: " + newTemp); }
  //return newTemp;
  document.getElementById("new-temp").innerHTML = newTemp + " ºC";
}

function convert() {
  let oldTemp = document.getElementById("temp-f").value;
  let newTemp2 = (oldTemp - 32) * 5/9;
  document.getElementById("new-temp").innerHTML = newTemp2;
}

let submitBtn = document.getElementById("submit-button");

submitBtn.addEventListener("click", convertFarenheitToCelsius);
submitBtn.addEventListener("click", verifyClick);

function verifyClick() {
  console.log("The submit button has been clicked.");
}

//document.getElementById("submit-button").addEventListener("click", convertFarenheitToCelsius(temp));

// function testFunction() {
//   console.log("testFunctiont test...");
// }

//document.getElementById("new-temp").innerHTML(newTemp);

function convertCelsiusToFarenheit(temp) {

}
