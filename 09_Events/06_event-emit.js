const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) => {

    console.log(`data recived by user ${name} and his id ${id}`);
    
})

customEmitter.on('response', () => {

    console.log(`other data recived`);
    
})

customEmitter.emit('response','yash', 34) // alwys need to first listen event or on and then amit emit event