const fs = require('fs');
fs.copyFile('renamed.txt', 'copy.txt', (err) => {
  if (!err) console.log('File copied');
});
