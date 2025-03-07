let a = true;
let b = true;
let resultado;

resultado = (a && b);
console.log("Resultado de una AND: ", resultado);

a = false;
b = false;

resultado = (a || b )
console.log("Resultado de una OR : ", resultado);

a = false;
resultado = !a;

console.log("Resultado de una NOT: ", resultado);