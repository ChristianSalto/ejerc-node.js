'use strict';

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.log('Error', err);
        return;
    }

    client.db('cursonode').collection('agentes').find().toArray((err, docs) => {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log(docs);
    });
})