const removeFromArray = function() {
    let totalArguments = arguments.length;
    let arr = arguments[0];
    for (let i = 1; i < totalArguments; i++){
        if (arr.indexOf(arguments[i]) >= 0){
            arr.splice(arr.indexOf(arguments[i]),1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
