const fs = require('fs');
fs.open('./FS module/temp.txt', 'w', (err, fd) => {
  fs.write(fd, 'Manual write', (err) => {
    fs.close(fd, () => console.log('File closed'));
  });
});
