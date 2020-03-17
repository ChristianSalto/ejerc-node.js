'use strict';

// Funciones que devuelven promesas

function conArroz(plato) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' arroz');
    });
}

function conAjo(plato) {
    return new Promise((resolve, reject) => {
        // resolve(plato + ' ajo');
        reject('no queda ajo'); // <--- Aqui estamos forzando un error para 
        // ver el funcionamiento del reject
    });
}


function con(plato, ingredientes) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' ' + ingredientes);
    });
}

// encadenar promesas
const paella = 'plato con';

conArroz(paella)
    .then(conAjo)
    // .catch(err => {
    //     return 'paella sin ajo, con'; <--- // gestionamos el err de manera intermedia
                                             // para no romper la cadena de .then y continuar las promesas
    // })
    .then((paella) => {
        //  console.log(paella);
        return con(paella, 'conejo');
    })
    .then(paella => {
        console.log(paella);
    })
    .catch((err) => {
        console.log('Hubo un error:', err); // capturamos el err del reject
    });