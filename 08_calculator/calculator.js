const add = function(a, b) {
  let sum = Math.round((a + b) * 10) / 10;
  return sum;
};

const subtract = function(a, b) {
  let diff = Math.round((a - b) * 10) / 10;
  return diff;
	
};

const sum = function(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  };
  return sum;
};

const multiply = function(multi) {
  let prod = 1;
  for(let i = 0; i < multi.length; i++) {
    prod *= multi[i];
  };
  return prod;
};

const power = function(a, b) {
  let power = 1;
  for(let i = 0; i < b; i++) {
    power *= a;
  };
	return power;
};

const factorial = function(num) {
  let factor = 1;
  if(num == 0) {return 1};
  for(let i = 1; i <= num; i++) {
    factor *= i;
  }
	return factor;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
