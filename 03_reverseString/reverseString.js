const reverseString = function(string) {
    let toArray = string.split('');
    let reversedString = "";
    for (let i = toArray.length - 1; i >=0; i--){
        reversedString = reversedString + toArray[i];
    }
    return reversedString;
    
};

// Do not edit below this line
module.exports = reverseString;
