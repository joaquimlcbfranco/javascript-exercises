const reverseString = function(string) {
    word = '';
    for (let i = string.length; i >= 0; i--) {
        word += string.substr(i, 1);
    }

    return word;
};

// Do not edit below this line
module.exports = reverseString;
