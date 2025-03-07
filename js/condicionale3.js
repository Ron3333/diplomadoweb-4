
let cedula = false;
let edad = 17;

if(edad >= 18){

	if(cedula){
		console.log("Es mayor de edad y puede votar");
	}else{
		console.log("Es mayor de edad pero no tiene cedula");
	}

}else{

	console.log("NO es mayor de edad y puede votar");
}