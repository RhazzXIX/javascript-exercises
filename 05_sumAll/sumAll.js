const sumAll = function() {
    // get arguments and sort them
    let numArg = Array.from(arguments);
        numArg = numArg.sort();  
    // sum holder & variable to add
    let sum;
    let add = 0;
    // increments the number from first argument then adds them
    // until the last arguments
    for(let i = numArg[0]; i <= numArg[numArg.length -1]; i++) {
            sum = add += i;   
    };
    // check array if NAN || negative == ERROR
    for(let j = 0; j <= 1; j++) {
        if (numArg[j] < 0 || typeof numArg[j] != typeof 1) {
            sum = 'ERROR'; break;
        }; 
    };
    

    return sum;
}; 

// Do not edit below this line
module.exports = sumAll;
