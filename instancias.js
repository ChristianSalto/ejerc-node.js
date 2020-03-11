'use strict'

// crear una funcion para usarla como constructor de objetos
function Fruta(nombre) {
    // al utilizar la funcion con new, devolvera 'this
    this.nombre = nombre;

    this.getNombre = function (valor) {
        this.nombre = valor;
    }
}


const limon = new Fruta('limon');

console.log(limon.nombre);