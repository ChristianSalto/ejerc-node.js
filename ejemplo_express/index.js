'use strict';

// cargar express y crear aplicacion
const express = require('express');
const http = require('http');

const app = express();

// definir rutas
app.get('/', (request, response, next) => {
    response.send('Hola pepe');
});

// arrancar servidor
const server = http.Server(app);
server.listen(3000, function () {
    console.log('listening on port 3000');
})