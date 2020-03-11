'use strict'; // <-- Nos indica el modo en el que el navegador debe
              // 

var x = 'hola';

// Lo que hace el hoisting aqui es que con independencia de donde esté la declaración de una variable,
// ésta es movida al inicio del ámbito al que pertenece.

function saluda() {
 // var x;   <--- hoisting, por lo que el console.log(x) es: 
    console.log(x); // <-- undefined
    var x = 'adios';
}

saluda();


// let y const no hacen hoisting, por lo que javascript creara conflicto 
// y dara error