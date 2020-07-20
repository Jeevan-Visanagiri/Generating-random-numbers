"use strict";

var random = function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
};

console.log('The 8 digit Random number are ' + random(10000000, 99999999));