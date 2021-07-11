/**
 * @function Function to count the occurence of keys which have duplicate values.
 * @param {Array} arr 
 * @param {string} key 
 */

 const getSameKeyValueOccurence = (arr, key) => {
    // array to store the duplicate key value pair objects
    const finalResult = [];

    // iterating over each element of array
    arr.forEach(obj => {
        // check whether our final result object contains any object
        // that has match of same key value with the current iterating object.
        if (finalResult.some(item => item[key] === obj[key])) {
            finalResult.forEach(item => {
                if (item[key] === obj[key])
                    item['occurence'] += 1;
            })
        } else {
            // if we don't have match then create one
            let temp = {};
            temp[key] = obj[key];
            temp['occurence'] = 1;
            finalResult.push(temp);
        }
    })
    return finalResult;
}

let arr = [
    {
       ename: "Ram",
       eId: 23
    },
    {
       ename: "Shyam",
       eId: 24
    },
    {
       ename: "Ram",
       eId: 21
    },
    {
       ename: "Ram",
       eId: 25
    },
    {
       ename: "Kisan",
       eId: 22
    },
    {
       ename: "Shyam",
       eId: 20
    }
 ]
   
//  let key = "ename"
//  console.log(result);
//  const result = getSameKeyValueOccurence(arr, key);

module.exports = getSameKeyValueOccurence;