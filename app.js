// Debug
let debug = false;

// Vars
let temp = document.getElementById("temp-f").value;
let submitButton = document.getElementById("submit-button");
let clearButton = document.getElementById("clear-button");

// Event listeners
submitButton.addEventListener("click", convertFarenheitToCelsius);
submitButton.addEventListener("click", verifyClick);
clearButton.addEventListener("click", clearInput);

// Funcs
function convertFarenheitToCelsius() {
  let temp = document.getElementById("temp-f").value;
  if (!temp) {
    alert("No value entered.");
    return
  }
  newTemp = ((temp - 32) * 5/9).toPrecision(3);
  document.getElementById("new-temp").innerHTML = newTemp + " ºC";

  if (debug) { console.log((temp - 32) * 5/9); }
  if (debug) { console.log("newTemp is: " + newTemp); }
}

function convertCelsiusToFarenheit() {
  let temp = document.getElementById("temp-c").value;
  if (!temp) {
    alert("No value entered.");
    return
  }
  newTemp = ((temp - 32) * 5/9).toPrecision(3);
  document.getElementById("new-temp").innerHTML = newTemp + " ºF";

  if (debug) { console.log((temp - 32) * 5/9); }
  if (debug) { console.log("newTemp is: " + newTemp); }

}

function verifyClick() {
  console.log("The submit button has been clicked.");
}

function clearInput() {
  document.getElementById("temp-f").value = "";
  document.getElementById("new-temp").innerHTML = "";
}
