const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789'
    
    const word = string
                    .toLowerCase()
                    .split('')
                    .filter(char => alphanumerical.includes(char))
                    .join('')

    return word.split('').reverse().join('') === word;
};

// Do not edit below this line
module.exports = palindromes;
