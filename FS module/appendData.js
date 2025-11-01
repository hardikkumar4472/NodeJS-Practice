const fs = require('fs');
fs.appendFile('./FS module/temp.txt', 'New content\n', (err) => {
  if (!err) console.log('Appended data');
});
