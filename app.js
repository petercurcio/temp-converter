// Debug
let debug = false;

// Vars
let temp = document.getElementById("temp-f").value;
const submitButton = document.getElementById("submit-button");
const clearButton = document.getElementById("clear-button");
const fcBtn = document.getElementById("f-to-c-btn");
const cfBtn = document.getElementById("c-to-f-btn");

// Event listeners
submitButton.addEventListener("click", convertFarenheitToCelsius);
submitButton.addEventListener("click", verifyClick);
clearButton.addEventListener("click", clearInput);
fcBtn.addEventListener("click", setMode);
cfBtn.addEventListener("click", setMode);

// Funcs
function convertFarenheitToCelsius() {
  let temp = document.getElementById("temp-f").value;
  if (!temp) {
    alert("No value entered.");
    return;
  }
  newTemp = ((temp - 32) * 5/9).toPrecision(3);
  document.getElementById("new-temp").innerHTML = newTemp + " ºC";
  document.getElementById("temp-c").value = newTemp;

  if (debug) { console.log((temp - 32) * 5/9); }
  if (debug) { console.log("newTemp is: " + newTemp); }
}

function convertCelsiusToFarenheit() {
  let temp = document.getElementById("temp-c").value;
  if (!temp) {
    alert("No value entered.");
    return;
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

function setMode(el) {
  console.log(el);
  if ( el.target.id === "f-to-c-btn" ){
    //let fcStatus = document.getElementById("f-to-c-btn").value;
    //fcBtn.classList.add("active-button");
    document.getElementById("f-to-c-btn").classList.add("active-button");
    document.getElementById("c-to-f-btn").classList.remove("active-button");
  } else {
    document.getElementById("f-to-c-btn").classList.remove("active-button");
    document.getElementById("c-to-f-btn").classList.add("active-button");
  }

  // if button is active, deactivate
  // if button is inactive, activate
}
