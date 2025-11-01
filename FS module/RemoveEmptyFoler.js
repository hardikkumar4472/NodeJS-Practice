const fs = require('fs');
fs.rmdir('testFolder', (err) => {
  if (!err) console.log('Folder removed');
});
