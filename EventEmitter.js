const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
function greetListener(name) {
  console.log(`Hello, ${name}! Welcome to Node.js EventEmitter.`);
}
eventEmitter.on('greet', greetListener);
eventEmitter.emit('greet','Hardik');
eventEmitter.once('intro',(name)=>{
    console.log(`Hello ${name} this event will only run once`);
})
eventEmitter.emit('intro','Hardik');
eventEmitter.emit('intro','abc');
eventEmitter.removeListeners('greet',greetListener);
eventEmitter.removeAllListeners('greet',greetListener);
