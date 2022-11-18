const palindromes = function (string) {
    //lowecase the string
    let lowString = string.toLowerCase();
    
    //create the string into array
    let arrString = lowString.split('');

    //removes the punctuations
    let clearArray = clear(arrString);

    
    function clear(array) {
        let toRemove = ['!', "'", '?', ' ','.',',']
        for(let x = 0; x < 2; x++){
            for ( let i = 0; i <= toRemove.length; i++) {
                for (let j = 0; j <= array.length; j++) {
                    if (array[j] === toRemove[i]) {
                        array.splice(j,1);
                    };
                };
            };
        };   
        return array;
    }
    //reverse the array
    function reverse (array) {
        let newArray =[];
        for(let i = 0; i < array.length; i++){
            newArray.push(array[i]);
        };  return newArray.reverse();
    }
    
    let revArray = reverse(clearArray);

    //combines the array

    let clearString = clearArray.join('');
    let reverseString = revArray.join('');
    console.log(clearString);
    console.log(reverseString);

    if(clearString === reverseString) {
        return true;
    } else {return false};

};

// Do not edit below this line
module.exports = palindromes;
