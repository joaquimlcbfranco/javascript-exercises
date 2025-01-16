const sumAll = function(number1, number2) {
    let sum = 0;
    min = number1 <= number2 ? number1: number2;
    max = number1 > number2 ? number1: number2;

    if (min < 0 || max < 0 || !(Number.isInteger(min)) || !(Number.isInteger(max))) {
        return 'ERROR';
    }

    for (let i = min; i <= max; i++ ) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
