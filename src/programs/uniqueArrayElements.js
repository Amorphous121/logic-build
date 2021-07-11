/**
 * Function to produce unique array elements from an array.
 * @param {Array} arr 
 * @returns {Array} array of unique elements
 */
 const uniqueElement = function (arr) {
    const unique = [];
    arr = arr.filter(item => {
        if (arr.indexOf(item) === arr.lastIndexOf(item))
            unique.push(item);       
    })
    return unique;
}

// const arr = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
// console.log(uniqueElement(arr));

module.exports = uniqueElement;
