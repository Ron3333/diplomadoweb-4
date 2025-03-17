let miFuncion = function(a = 4, b = 5)
{ 
	console.log(arguments[0]) ;
	console.log(arguments[1]) ;
	console.log(arguments[2]) ;
	return a + b ;
	//return a + b + arguments[2];
};

resultado= miFuncion(2,3);
console.log(resultado) ;

function sumarTodo(){
	let suma = 0;
	console.log("Tamaño de los argumentos: "+ arguments.length);
	for (let i =  0 ; i < arguments.length; i++) {
		suma += arguments[i]; // suma = suma + arguments[i]
	}
	return suma;
}

let total = sumarTodo( 10, 10, 10, 10, 12 );
console.log("TOTAL: "+total);

