//Sumar los elementos de un array

const numeros = [20, 2, 3, 4, 5];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
}

console.log("La suma es: "+ suma);