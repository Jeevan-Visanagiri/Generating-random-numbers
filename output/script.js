"use strict";

function random(num) {
  var x = Math.floor(Math.random() * 10);
  if (num == 1) return num;else {
    return x = x + random(num - 1) * 10;
  }
}

console.log('The 8 digit Random number are ' + random(8));