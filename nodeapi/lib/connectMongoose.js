'use strict';

const mongoose = require('mongoose');

const conn = mongoose.connection;

conn.on('open', () => {
    console.log('Conectado a MongoDB en', conn.name);
});

conn.on('error', err => {
    console.log('Error de conexion', err);
    process.exit(1);
})

mongoose.connect('mongodb://localhost/cursonode', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = conn;
