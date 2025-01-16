const removeFromArray = function(list, args) {
    for (let i = 0; i < list.length; i++) {
        if (args === list[i]) {
            list.splice(i, 1);
        }
    }

    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
