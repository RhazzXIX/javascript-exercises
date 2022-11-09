const ftoc = function(num) {
  // conversion to celsius
  let celcius = ((num-32)*(5/9));
  // Round to single decimal without affecting interger results
  // Multiply the result to 10 for the decimal to avoid the Math.Round
  // Math.round then round the number to the nearest integer
  // Divide the result by 10 to return the decimal to the float.
  celcius = (Math.round(celcius * 10)) / 10;
  return celcius;
};

const ctof = function(num) {
  // conversion to farenheit
  let farenheit = ((num*(9/5))+32);
  // round to single float without affecting integer results
  // Multiply the result to 10 for the decimal to avoid the Math.Round
  // Math.round then round the number to the nearest integer
  // Divide the result by 10 to return the decimal to the float.
  farenheit = (Math.round(farenheit * 10)) / 10;
  return farenheit;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
