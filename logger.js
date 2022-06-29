const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        // call event
        const id = uuid.v4();
        this.emit('message', { id, msg });
    }
}

// module.exports = Logger;

const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));

logger.log('Hello World');