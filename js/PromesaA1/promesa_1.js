let promesaCumplidad = false;

const MiPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
    	if(promesaCumplidad) {
    		resolve("¡Promesa cumplida!")
    	}else {
    		reject("¡Promesa rechazada...!")
    	}

    }, 3000)

});

// Caso 1

/*
function resolver(valor){
	console.log("Otra funcion: "+ valor);
}

MiPromesa.then(resolver);

*/

// Caso 2

/*
MiPromesa.then((valor)=>{
	console.log(valor);
});
*/

// Caso 3 

const promesasCumplida = (valor) => {
	console.log(valor);
};

const promesasRechazada = (valorRechazo) => {
	console.log(valorRechazo);
};

//MiPromesa.then(promesasCumplida, promesasRechazada);

MiPromesa.then(promesasCumplida, promesasRechazada);




