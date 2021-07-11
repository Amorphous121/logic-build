/**
 * Program to count no of datatypes in an array
 * @param {array} arr 
 */
 const countDatatypes = arr => {
    const finalObject = {};
    arr.forEach(item => {
        if (finalObject[typeof item])
            finalObject[typeof item] += 1;
        else
            finalObject[typeof item] = 1
    })
    return finalObject;
}

const result = countDatatypes([1, true, 'hello', [], {}, undefined, function(){}] )
console.log(result);

module.exports = countDatatypes;