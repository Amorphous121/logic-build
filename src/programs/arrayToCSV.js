/**
 * Function to convert given 2d array to csv string
 * @param {array} data 
 */


 function arrToCSV (data) {
    let titles = data[0];
    let csvString = titles.join(',');
    csvString = csvString + '\n';
    data.splice(0, 1);
    data.forEach(item => {
        csvString = csvString + item.join(',') + '\n';
    })  
    console.log(csvString);
}

let data = [ [ "a" , "b"] , [ "c" ,"d" ] ];
let data2 = [ ['a', 'b'], [ "1", "2"], ["3", "4"], ["5", "6"] ]
arrToCSV(data2)