const sumAll = function() {
    if (arguments[0] < 0 || arguments[1] < 0 ||
        typeof(arguments[1]) != "number" || typeof(arguments[0]) != "number"){
        return("ERROR");
    }
    let start;
    let finish;
    if (arguments[0] < arguments[1]){
        start = arguments[0];
        finish = arguments[1];
    } else {
        start = arguments[1];
        finish = arguments[0];
    }
    let sum = 0;
    for (let i = start; i <= finish; i++){
        sum += i;
    }
    return sum;
};

console.log(sumAll(10, "90"));
// Do not edit below this line
module.exports = sumAll;
