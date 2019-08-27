// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, cb) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    
    console.log('Callback: I have the data!');
    if (!error) {
      cb(data);
    } else {
      cb(undefined);
    }
  });
};


module.exports = breedDetailsFromFile;