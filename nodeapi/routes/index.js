var express = require('express');
var router = express.Router();
const { query, validationResult } = require('express-validator');






/* GET home page. */
router.get('/', function (req, res, next) {
    // res.locals.title = 'Express';

    const segundo = new Date().getSeconds();

    res.locals.valor = 22;
    res.locals.otroValor = ''  // '<script>alert("Hola");</script>';
    res.locals.condicion = {
        segundo: segundo,
        estado: segundo % 2 === 0
    }

    res.locals.users = [
        { name: 'Smith', age: 39 },
        { name: 'Juan', age: 29 },
        { name: 'Pepe', age: 9 }
    ];

    // Pasamos funcion de prueba para la vista
    res.locals.myFuncion = (valor) => {
        return valor * 10;
    }

    res.render('index');
});

router.get('/paramrouter/:numero', (req, res, next) => {
    console.log(req.params);
    const numero = req.params.numero;
    res.send(`ok el numero es --> ${numero}`);
});

router.get('/paramopcional/:dato?', (req, res, next) => {
    console.log(req.params);
    res.send('ok');
});

// http://localhost:3000/parametros/45/primero/A
router.get('/parametros/:id([0-9]+)/:piso/:puerta', (req, res, next) => {
    console.log(req.params);
    res.send('ok');
});

router.get('/enquerystring', [
    query('talla').isNumeric().withMessage('deberia ser numerico'),
    // query('color').custom(value => {
    //     return true;
    // })
], (req, res, next) => {
    validationResult(req).throw(); // lanza un error si hay un error de validacion 
    console.log(req.query);
    res.send('ok');
});

router.post('/enelbody', (req, res, next) => {
    console.log(req.body);
    const apiKey = req.body['api-key'];
    //if (apiKey === '...') { ... }
    // res.send(apiKey);
    res.send('ok');
});

module.exports = router;
