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
function serie(arr, fn, callbackDeFinalizacion) {
    if (arr.length === 0) {
        callbackDeFinalizacion();
        return;
    }


    fn('texto' + arr.shift(), () => {
        serie(arr, fn, callbackDeFinalizacion);
    })
}

serie([1, 2, ' tres', 4, 5], escribeTras2Segundos, () => {
    console.log('termino');
});