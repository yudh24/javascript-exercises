const add = function() {
	return arguments[0]+arguments[1];
};

const subtract = function() {
	return arguments[0]-arguments[1];
};

const sum = function(arr) {
  let sumResult = 0;
	arr.forEach(element => {
    sumResult = sumResult + element;
  });
  return sumResult;
};

const multiply = function(arr) {
  let multiplyResult = 1;
	arr.forEach(element => {
    multiplyResult = multiplyResult * element;
  });
  return multiplyResult;
};

const power = function() {
	return arguments[0] ** arguments[1];
};

const factorial = function() {
  let factorialResult = 1;
  if (arguments[0] == 0 || arguments[0] == 1){
    return 1;
  } else {
    for (let i = arguments[0]; i > 0; i--){
      factorialResult = factorialResult * i;
    }
    return factorialResult;
  }
	
};

console.log(factorial(2));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
