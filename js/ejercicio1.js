let numero1 = 2;
let numero2 = 4;
let resultado;
let operador = "mult" // mult , div, resta, suma


if(operador == "suma"){
	resultado = numero1 + numero2;
}else if(operador == "resta"){
	resultado = numero1 - numero2;
}
else if(operador == "mult"){
	resultado = numero1 * numero2;
}else{
	console.log("No coloco el operador correcto");
}

console.log("El resultado de "+ operador + " es: " + resultado);


