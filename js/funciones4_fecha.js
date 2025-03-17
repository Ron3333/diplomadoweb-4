"use strict"

const sumar = (a, b) => a + b;

let resultado = sumar(4, 9);
console.log(resultado);

const miFuncion = (a, b, c) => {
	//Mas codigo 
	let result =  a * b  * c;
	return result;
}

resultado = miFuncion(10,20,2);
console.log(resultado);

//const otraFuncion = (a) => a + 2;
const otraFuncion = (a) => a + 2;
resultado = otraFuncion(2);
console.log(resultado);