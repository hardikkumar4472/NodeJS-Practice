const fs = require('fs').promises;
async function example() {
  await fs.writeFile('promise.txt', 'Promise based FS');
  const data = await fs.readFile('promise.txt', 'utf8');
  console.log(data);
}
example();
