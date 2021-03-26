// Debug
let debug = false;

// Vars
let tempF = document.getElementById("temp-f");
let tempC = document.getElementById("temp-c");
const submitButton = document.getElementById("submit-button");
const clearButton = document.getElementById("clear-button");
const fcBtn = document.getElementById("f-to-c-btn");
const cfBtn = document.getElementById("c-to-f-btn");

// Event listeners
submitButton.addEventListener("click", chooseConversion);
submitButton.addEventListener("click", verifyClick);
clearButton.addEventListener("click", clearInput);
fcBtn.addEventListener("click", setMode);
cfBtn.addEventListener("click", setMode);

// Funcs
function convertFarenheitToCelsius() {
  if (!tempF.value) {
    alert("No value entered.");
    return;
  }
  tempC.value = ((tempF.value - 32) * 5/9).toPrecision(3);

  if (debug) { console.log((tempF - 32) * 5/9); }
  if (debug) { console.log("newTemp is: " + newTemp); }
}

function chooseConversion() {
  if (fcBtn.classList.contains("active-button")) {
    convertFarenheitToCelsius();
  } else {
    convertCelsiusToFarenheit();
  }
}

function convertCelsiusToFarenheit() {
  if (!tempC.value) {
    alert("No value entered.");
    return;
  }
  tempF.value = ((tempC.value - 32) * 5/9).toPrecision(3);

  if (debug) { console.log((tempC - 32) * 5/9); }
  if (debug) { console.log("newTemp is: " + newTemp); }
}

function verifyClick() {
  console.log("The submit button has been clicked.");
}

function clearInput() {
  tempF.value = "";
  tempC.value = "";
}

function setMode(el) {
  console.log(el);
  if ( el.target.id === "f-to-c-btn" ){
    fcBtn.classList.add("active-button");
    cfBtn.classList.remove("active-button");
    tempF.value = "";
    tempC.value = "";
    tempC.readOnly = true;
    tempF.readOnly = false;
  } else {
    fcBtn.classList.remove("active-button");
    cfBtn.classList.add("active-button");
    tempF.value = "";
    tempC.value = "";
    tempF.readOnly = true;
    tempC.readOnly = false;
  }
}
