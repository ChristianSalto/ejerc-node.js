'use strict';

const mongoose = require('mongoose');

// crear un esquema
const agenteSchema = mongoose.Schema({
    name: String,
    age: Number
});


// con el esquema, creamos un medelo
const Agente = mongoose.model('Agente', agenteSchema);


// exportamos el modelo
module.exports = Agente;