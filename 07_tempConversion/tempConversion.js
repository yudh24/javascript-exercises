const ftoc = function(temperature) {
  let cels = (temperature - 32) * 5/9;
  return Math.round(cels * 10)/10;
};

const ctof = function(temperature) {
  let fahren = temperature * 9/5 + 32;
  return Math.round(fahren * 10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
