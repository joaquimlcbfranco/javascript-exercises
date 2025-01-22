const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;	
};

const sum = function(arr) {
	return arr.reduce((total, number) => total + number, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, number) => total * number, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	total = 1;
  while (number != 0) {
    total *= number
    number--;
  }
  return total;
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
