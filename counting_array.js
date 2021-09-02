"use strict";

let iterator;
const numberArray = [0];

window.addEventListener("DOMContentLoaded", init);

// Set-up
function init() {
  console.log("init");
  iterator = 0;
  countingLoop();
}

// Count up from 0 and add the new number to the front of the array (unshift)
// When the numberArray hits 9 numbers, stop making it longer (slice)
function countingLoop() {
  console.log(numberArray.slice(0, 9));
  iterator++;
  numberArray.unshift(iterator);
  setTimeout(countingLoop, 1000);
}
