const removeFromArray = function(list, ...args) {
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (list[j] === args[i]) {
                list.splice(j, 1);
                j--;
            }
        }
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
