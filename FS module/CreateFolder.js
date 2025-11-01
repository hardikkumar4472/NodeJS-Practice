const fs = require('fs');
fs.mkdir('./FS module/testFolder', (err) => {
  if (!err) console.log('Folder created');
});
