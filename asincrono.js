'use strict';

console.log('empiezo');

// funcion que escribe un texto en la consola tras dos segundos

function escribeTras2Segundos(texto, callback) {
    setTimeout(() => {
        console.log(texto);
        callback();
    }, 2000);
}

// bucle asincrono en serie
// llamar a una funcion (n) veces en serie
function serie(n, fn, callbackDeFinalizacion) {
    if (n === 0) {
        callbackDeFinalizacion();
        return;
    }
    n = n - 1;
    fn('texto' + n, () => {
        serie(n, fn, callbackDeFinalizacion);
    })
}

// escribeTras2Segundos('texto1', () => {
//     escribeTras2Segundos('texto2', () => {
//         console.log('termino');
//     });
// });

serie(5, escribeTras2Segundos, () => {
    console.log('termino');
});