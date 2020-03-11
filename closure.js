'use strict';

function creaSumador(a) {
    // Aqui tenemos a (5) como contexto,
    // y este contexto es capturado por
    // la funcion que retornamos
    return function (b) {
        return a + b;
    }
};


const suma5 = creaSumador(5);

console.log(suma5(3));


// --------------

function creaAgente(nombre) {
    return {
        getNombre: () => {
            return nombre;
        },

        setNombre: valor => {
            nombre = valor;
        },

        saluda: () => {
            console.log('Hola soy', nombre);
        }
    }
}


const jones = creaAgente('jones');

// jones.saluda();

setTimeout(jones.saluda, 2000);