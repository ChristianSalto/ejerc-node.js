'use strict';

const EventEmitter = require('events');


const emisor = new EventEmitter();

// me suscribo a eventos

emisor.on('llamada de telefono', ({ quienLlama }) => {
    if (quienLlama === 'madre') {
        return;
    }
    console.log('ring ring');
});

emisor.once('llamada de telefono', ({ quienLlama }) => {
    console.log('brr brr');
});

emisor.emit('llamada de telefono', { quienLlama: 'madre' });