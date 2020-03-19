'use strict';

const conn = require('./lib/connectMongoose');
const Agente = require('./models/Agente');

conn.once('open', async () => {
    try {
        await initAgentes();
        conn.close();
    } catch (err) {
        console.error('Hubo un error: ', err);
        process.exit(1);
    }
});

async function initAgentes() {
    await Agente.deleteMany();
    await Agente.insertMany([
        { name: 'Smith', age: 37 },
        { name: 'Jones', age: 37 }
    ])
}