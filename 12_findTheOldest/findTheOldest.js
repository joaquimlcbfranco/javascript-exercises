const findTheOldest = function(arr) {
    const oldest = arr.reduce((prevPerson, currentPerson) => {
        if (!Object.keys(prevPerson).length) {
            prevPerson = currentPerson;
        }
        else {
            if ((!Object.keys(currentPerson).includes('yearOfDeath') ? new Date().getFullYear() : currentPerson.yearOfDeath) - currentPerson.yearOfBirth >
                (!Object.keys(prevPerson).includes('yearOfDeath') ? new Date().getFullYear() : prevPerson.yearOfDeath) - prevPerson.yearOfBirth) 
            {
                prevPerson = currentPerson;
            }
        }
        return prevPerson;
    }, {});
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
