'use strict';

const mongoose = require('mongoose');

// crear un esquema
const agenteSchema = mongoose.Schema({
    name: String,
    age: Number,
    message: mongoose.Schema.Types.Mixed, // Para datos sin Schema
});

agenteSchema.statics.lista = function (filtro, limit, skip, sort, fileds) {
    const query = Agente.find(filtro);
    query.skip(skip);
    query.limit(limit);
    query.sort(sort);
    query.select(fileds);
    return query.exec();
};

// con el esquema, creamos un medelo
const Agente = mongoose.model('Agente', agenteSchema);


// exportamos el modelo
module.exports = Agente;