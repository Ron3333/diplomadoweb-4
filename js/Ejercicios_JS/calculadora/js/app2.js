function sumar(){
	const forma = document.getElementById("forma");
	let operandoA = forma["operandoA"];
	let operandoB = forma["operandoB"];
	let operador = forma["operador"];
	console.log(operador.value);
	let resultado = 0;
	let mensaje = "";

		switch (operador.value) {
			case "suma":
				resultado = parseFloat(operandoA.value) +  parseFloat(operandoB.value);
				break;
			case "resta":
				resultado = parseFloat(operandoA.value) -  parseFloat(operandoB.value);
				break;
			case "mul":
				resultado = parseFloat(operandoA.value) *  parseFloat(operandoB.value);
				break;
			case "div":
				if(operandoB.value != 0){
					console.log("Division");
					resultado = parseFloat(operandoA.value) /  parseFloat(operandoB.value);
				}else {
					resultado = "No se puede dividir entre cero";
				}
				break;
			default:
					resultado = "Opción invalidad";
				break;
		}

		document.getElementById("resultado").innerHTML = resultado ; 
		
}
