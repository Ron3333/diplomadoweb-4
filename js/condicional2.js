
let cedula = true;
let edad = 19;

if(cedula && (edad >= 18)  ){
	console.log("Puede Votar");
}else{
	console.log("NO Puede Votar");
}

cedula = false;
edad = 19;
let palanca = true;

if( (cedula && (edad >= 18)) || palanca ){
	console.log("Puede Votar 2 ");
}else{
	console.log("NO Puede Votar 2 ");
}