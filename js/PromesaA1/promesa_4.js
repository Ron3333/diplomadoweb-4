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

async function  realizarPedidos(producto){

	try{
		const repuesta1 = await ordenarproductos(producto);
		console.log(repuesta1);
		const repuesta2 = await procesarPedidos(repuesta1)
		console.log(repuesta2);
    }catch(error){
    	console.log(error);
    }

}

realizarPedidos("tazaz");
