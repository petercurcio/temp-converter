console.log("is this working...?");

// (function(){
//   document.getElementById("main-title").innerHTML = "New Title";
//   console.log("this ran, too...");
// })();

let temp = document.getElementById("temp-f").value;
console.log("temp out here is: " + temp);

//let newTemp;

function convertFarenheitToCelsius(temp) {
  // get input temp
  // apply formula
  // return converted value
  // T(°C) = (T(°F) - 32) × 5/9

  //return (temp - 32) * 5/9
  console.log((temp - 32) * 5/9);
  //console.log("temp is: " + temp);
  //newTemp = (temp - 32) * 5/9);
  //return newTemp;
}

//document.getElementById("new-temp").innerHTML(newTemp);

function convertCelsiusToFarenheit(temp) {

}
