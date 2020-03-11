'use strict';

function suma(a, b, callback) {
    const resultado = a + b;
    setTimeout(() => {
        callback(resultado);
    }, 2000);
}

console.log('Empiezo');

suma(3, 5, function (resultado) {
    console.log('Termina la suma ' + resultado);
    console.log('Fin');
});

 console.log('Me pongo hacer otras cosas mientras tu sumas');