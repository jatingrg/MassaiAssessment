const fs = require('fs');
const path = require('path');

function readDataFile(callback) {
  const filePath = path.join(__dirname, 'Data.txt');

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      callback("Error reading file: " + err.message);
    } else {
      callback(null, data);
    }
  });
}

module.exports = readDataFile;
