const EventEmit = require('events');

// Create class
class MyEmitter extends EventEmit {}

//init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired'));

// init event
myEmitter.emit('event');