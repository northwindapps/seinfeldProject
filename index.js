const fs = require('fs');

fs.readFile('./marineBiologist.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the JSON file:', err);
    return;
  }
  try {
    const jsonData = JSON.parse(data);
    console.log(jsonData);
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
