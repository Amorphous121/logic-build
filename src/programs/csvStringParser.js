/**
 * Program to convert csv string to array of objects
 * @param {string} data 
 * @param {string} delimeter 
 */
 const csvParser = (data, delimeter) => {
    
    // Extract the titles first
    const titles = data.slice(0, data.indexOf('\n')).split(delimeter);

    // Extract the data from csv string
    let titleValues = data.slice(data.indexOf('\n') + 1).split('\n');

    let finalObject = titleValues.map(item => {
        let temp = {}
        const values = item.split(delimeter);
        values.forEach((element, index) => {
            temp[titles[index]] = element
        });
        return temp;
    }); 
}

module.export = csvParser;

// const inputString1 = 'Name,Roll Number\nRohan,01\nAryan,02\nPrathamesh,03';
// const inputString2 = 'Name;Roll Number\nRohan;01\nAryan;02';

// csvParser(inputString1, ',')
// csvParser(inputString2, ';')