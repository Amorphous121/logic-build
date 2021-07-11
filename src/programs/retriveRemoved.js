/**
 * Function to delete the element which is less than give no (limiter)
 * @param {Array} array 
 * @param {number} limiter 
 */
const retriveRemoved = function (array, limiter) {
    const shouldDelete = [];
    array.forEach((element, index) => {
        if (element < limiter) {
            shouldDelete.push(element);   
            delete array[index];
        }
    });
    array = array.filter(item => item !== undefined);
    return shouldDelete;
}
let arr = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
const result = retriveRemoved(arr, 5);
console.log("Deleted Elements are : ", result);

module.exports = retriveRemoved;