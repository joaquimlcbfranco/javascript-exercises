const fibonacci = function(index) {
    if (index < 0) {
        return 'OOPS';
    }

    let arr = [0];
    index = +index;

    for (arr.length; arr.length - 1 !== index;) {
            if (arr.length === 1) {
                arr.push(1);
            }
            else {
                newElem = arr[arr.length - 1] + arr[arr.length - 2];
                arr.push(newElem);
            }
        }
    return arr[index];
}

// Do not edit below this line
module.exports = fibonacci;
