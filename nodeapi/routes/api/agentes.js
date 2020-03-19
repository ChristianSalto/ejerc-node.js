'use strict';

const express = require('express');
const router = express.Router();

const Agente = require('../../models/Agente');

router.get('/', async (req, res, next) => {
    try {
        const docs = await Agente.find()
        res.json(docs);
    } catch (err) {
        next(err);
    }
});


// GET /api/agentes/:id
// busca un agente por id y lo devuelve
router.get('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;
        const agente = await Agente.findOne({ _id: _id });
        if (!agente) {
            const err = new Error('Not found');
            err.status = 404;
            next(err);
            return;
        }
        res.json({ result: agente });
    } catch (err) {
        next(err);
    }
});

// POST /api/agentes
// Crear un agente

router.post('/', async (req, res, next) => {
    try {
        const agenteData = req.body;
        // creamos el objeto en memoria 
        const agente = new Agente(agenteData);
        // lo guardamos en la BD
        const agenteGuardado = await agente.save();

        res.status(201).json({ result: agenteGuardado });
    } catch (err) {
        next(err);
    }
});

module.exports = router;