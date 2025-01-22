const getTheTitles = function(obj) {
    const newArray = obj.reduce((prevRow, currentRow) => {
        prevRow.push(currentRow.title);
        return prevRow;
    }, [])
    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
