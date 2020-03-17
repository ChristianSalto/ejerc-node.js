'use strict';

// funcion que devuelve una promesa
function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('La promesa...');
        }, ms);
    });
}

// A continuacion veremos la misma funcion de mas arriba pero escrita en una sola linea.

//---- const sleep = ms => new Promise(resolve => setTimeout(resolve, ms)); ---// 

const promesa = sleep(3000);

console.log(promesa);

// cuando la promesa se cumpla, se ejecutara la funcion del .then
promesa.then((valor) => {
    console.log(valor, 'ha esperado 3 segundos');
    return sleep(1000);
}).then(() => {
    console.log('fin...');
});

//console.log('fin');

// Promise.all([promesa1(), promesa2(), promesa3(), promesa4()]).then(//esperaremos a que todas las promesas se cumplan)