

let cosas = ["x", "y", 5, "Hola","zzz"];

console.log(typeof(cosas));

console.log(cosas[3]);
console.log(cosas[20]);
console.log(cosas);
cosas.push('pepe');
console.log(cosas);
console.log("Propiedad Length cantidad : "+cosas.length);

cosas[3]="chaooooo";
console.log(cosas);

let x = cosas.pop();
console.log(cosas);
console.log(x);

console.log("********** FOR START ***********");

for (let i = 0 ; i < cosas.length ; i++) {
	 console.log("Indice : " + i + "  Valor es :" + cosas[i]);
}

console.log("********** FOR END ***********");






