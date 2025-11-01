const fs = require('fs');
fs.stat('renamed.txt', (err, stats) => {
  if (!err) console.log(stats);
});
