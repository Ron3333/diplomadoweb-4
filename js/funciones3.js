
//declaración funcion de tipo  expresion
const sumar = function(a, b){ return a + b};
let resultado = sumar(3,5)
console.log(resultado);

let resta = function(a, b){ return a - b};
resultado = resta(10,5)
console.log("resultado de la resta:" + resultado);

//funcion anonima self-invoking que se llama asi mismo
(function(a, b){
    console.log('Ejecutando la funcion anonima: ' + (a + b))
})(2, 5);

console.log(typeof sumar);

let a = 20;

function miFuncion(a){
    a = 50;
}

miFuncion(a);

console.log("Cuanto vale A:"+a);