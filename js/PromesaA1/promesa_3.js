// async Y  await

function ordenarproductos(producto){
	return new Promise((resolve,reject)=>{
		console.log(`Ordenando: ${producto} de  mi commercio`)
		setTimeout( ()=>{
            if(producto == "taza"){
            	resolve("Ordenando una taza ")
            }else {
            	reject("Este producto no esta disponible");
            }
		}, 2000 )
	});
}

function procesarPedidos(repuesta){
	return new Promise( resolve => {
		console.log("Procesando respuesta......");
		console.log(`La respuesta fue: "${repuesta}"`);
		setTimeout( ()=>{
            resolve("Gracias por tu compra... ")
		},4000)
	})
}

ordenarproductos("taza")
    .then( repuesta1 => {
    	console.log("Repuesta recibida");
    	console.log(repuesta1);
    	return procesarPedidos(repuesta1);
    })
    .then(repuesta2 => {
    	console.log(repuesta2);
    })
    .catch(error => {
    	console.log(error);
    })