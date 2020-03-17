'use strict';

// Funciones que devuelven promesas

function conArroz(plato) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' arroz');
    });
}

function conAjo(plato) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' ajo');
        // reject('no queda ajo'); // <--- Aqui estamos forzando un error para 
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

async function main() {
    let plato = await conArroz(paella);
    plato = await conAjo(plato);
    plato = await con(plato, 'y mejillones');
    // for (let i = 0; i < 5; i++) {
    //     plato = await con(plato, 'almeja');
    // }
    return plato;
}

main()
    .then(console.log)
    .catch(err => {
        console.log('Hubo un error:', err);
    });