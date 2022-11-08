const removeFromArray = function(numArray,num,...toRemove) {
    
    toRemove.push(num);  
    toRemove.sort();

    for(let i = 0; i <= numArray.length - 1; i++){
      for (let j = 0; j <= toRemove.length -1; j++) {
        if (numArray[i] === toRemove[j]) {
            numArray.splice(i,1);
        } else { continue;}
      }
    }


    
    return numArray;
}
// Do not edit below this line
module.exports = removeFromArray;
