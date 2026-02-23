console.log("Lab 04 - Node JS Working!");

const fs = require('fs');

// Write to a file
fs.writeFile('file.txt', 'Hello World!', function (err) {
    if (err) throw err;
    console.log('File saved!');
});
