const reverseString = function(string) {
// get string length for repetetion
let num = string.length;
// variable for array
const revArray = [];
// variable to return
let result = '';

// loop and splicing
for (i = (num -1 ); i >= 0; i--) {
    revArray.push(string.substr(i,1));
};
// loop for joining
for (j = 0; j < num; j++) {
    result += revArray[j];
}

return result;
};

// Do not edit below this line
module.exports = reverseString;
