/**
 * 
 * @param {Array} arr 
 * @param {number} value 
 */

 function percentileCalculation(arr, value) {

    let result = 0;
    for(i = 0; i < arr.length; i++) {
        if (arr[i] < value)
            result = result + 1;
        if (arr[i] === value)
            result = result + 0.5;
    }
    let displayResult = (result / arr.length) * 100;
    console.log(displayResult)
}
percentileCalculation([1, 2, 3, 4, 5, 6], 5);