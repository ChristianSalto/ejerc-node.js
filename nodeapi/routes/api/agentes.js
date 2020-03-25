'use strict';

const express = require('express');
const router = express.Router();

const Agente = require('../../models/Agente');

/**
 * GET /api/agentes
 * Devuelve una lista de agentes
 */

router.get('/', async (req, res, next) => {
    try {
        const name = req.query.name;
        const age = req.query.age;
        const limit = parseInt(req.query.limit || 10000);
        const skip = parseInt(req.query.skip);
        // http://localhost:3000/api/agentes?sort=age name
        const sort = req.query.sort;
        // http://localhost:3000/api/agentes?fields=age name -_id
        const fields = req.query.fields;


        const filtro = {};

        if (typeof name !== 'undefined') {
            filtro.name = name;
        };

        if (typeof age !== 'undefined') {
            filtro.age = age;
        }

        const docs = await Agente.lista(filtro, limit, skip, sort, fields);
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


/**
 * PUT /api/agentes
 * Actualiza un agente
 */

router.put('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;
        const agenteData = req.body;
        //   console.log(agenteData);
        const agenteActualizado = await Agente.findByIdAndUpdate(_id, agenteData, {
            new: true,
            useFindAndModify: false
        });
        // console.log(agenteActualizado);
        res.json({ result: agenteActualizado });
    } catch (err) {
        next(err);
    }
});


/**
 * DELETE /api/agentes
 * Elimina un agente
 */

router.delete('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;

        await Agente.deleteOne({ _id });

        res.json()
    } catch (err) {
        next(err);
    }
})

module.exports = router;