const repeatString = function(word, n) {
    let multiplyWord =""
    if (n < 0){
        return "ERROR";
    }
    for (let i = 1; i <=n; i++){
        multiplyWord = multiplyWord + word;
    }
    return multiplyWord;
};

// Do not edit below this line
module.exports = repeatString;
