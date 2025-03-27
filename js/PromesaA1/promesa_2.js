// Ejemplo Pizza 

const estatusPedido = () => {
	const estatus = Math.random() < 0.8;
	//console.log(estatus);
	return estatus;
}

/*
for(let i = 1;  i < 20 ; i++){
	estatusPedido();
}
*/

const miPromesaDePizza = new Promise((resolve, reject) => {

     setTimeout( () => {
     	if(estatusPedido()){
     		resolve("¡Pedido exitos!")
     	}else {
     		reject("ocurrio un error.. Intente con otro pizzero")
     	}
     }, 3000)

});

//Caso 1

/*
const manejarPedido = (mensajeConfirmacion) => {
	console.log(mensajeConfirmacion);
}

const rechazarPedido = (mensajeError) => {
	console.log(mensajeError);
}

miPromesaDePizza.then(manejarPedido); 
*/


// Caso 2
/*
miPromesaDePizza
.then((mensajeConfirmacion) => {
	console.log(mensajeConfirmacion)
})
 .then(null, (mensajeError) => {
	console.log(mensajeError);
});
*/
// Caso 3

miPromesaDePizza
.then((mensajeConfirmacion) => {
	console.log(mensajeConfirmacion)
})
 .catch((mensajeError) => {
	console.log(mensajeError);
});


