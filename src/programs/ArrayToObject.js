/**
 * Program to convert an 2D array to an Object
 * @param {Array} arr 
 */
 const ArrayToObject = (arr) => {
    let finalObject = {};
    arr.forEach(item => {
        finalObject[item[0]] = item[1];
    })
    return finalObject;
}

let arr = [
    ["John", 12],
    ["Jack", 13],
    ["Matt", 14],
    ["Maxx", 15]
]
const result = ArrayToObject(arr);
console.log(result);

module.exports = ArrayToObject;