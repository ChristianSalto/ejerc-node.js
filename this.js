'use strict';

function ByeBye(nombre) {
    this.nombre = nombre;

    this.saluda = function (valor) {
        console.log('Hola soy ' + this.nombre);
    }
}

const pepe = new ByeBye('pepe');

// pepe.saluda(); // <-- Mantenemos el this de la funcion por lo que 
// no nos dara error

//const saludar = pepe.saluda; // <-- Aqui perdemos el contexto del this
// puesto que la funcion a ejecutar ya no es saluda()
// si no saludar(), por lo que this nos dara error y nombre 
// nos dara undefined 
//saludar();

setTimeout(pepe.saluda, 2000); // Aqui perdemos el this, por que saluda
                               // se esta ejecutando atraves del setTimeout
                               // por lo que perdemos el contexto

setTimeout(pepe.saluda.bind(pepe), 2000); // con la funcion bind() podremos mantener 
                                         // el contexto y no perder el this

setTimeout(() => {  // Tambien podemos usar Arrow Functions para o perder 
    pepe.saluda();  // el this
}, 2000);