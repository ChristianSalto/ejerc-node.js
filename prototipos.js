'use strict';

// Definimos una funcion constructora de objetos
function Persona(nombre) {
    this.nombre = nombre;
}

// Crear un objeto 

const luis = new Persona('luis');
const pepe = new Persona('pepe');
const juan = new Persona('juan');

// Añadir propiedades al prototipo de la Persona

Persona.prototype.saludar = function () {
    console.log('Hola, me llamo', this.nombre);
}

luis.saludar();
pepe.saludar();
juan.saludar();

// Herencia de Persona --------------------


// funcion constructora de Agentes
function Agente(nombre) {
    // Heredar el constructor de persona
    Persona.call(this, nombre);
}


// Heredar sus propiedades (y metodos);
Agente.prototype = Object.create(Persona.prototype); // new Persona
//Agente.prototype.constructor = Agente;

const smith = new Agente('smith');
smith.saludar();

// console.log(smith instanceof Agente);
// console.log(smith instanceof Persona);
// console.log(smith instanceof Object);


// Herencia multiple-------------------

// Mixin Superheroe
function Superheroe() {
    this.vuela = function () {
        console.log(this.nombre, 'vuela');
    }

    this.invisible = function () {
        console.log(this.nombre, 'Se hace invisible');
    }
}

// copiar todas las propiedades de Superheroe al prototipo del Agente

Object.assign(Agente.prototype, new Superheroe());

smith.vuela();
smith.invisible();