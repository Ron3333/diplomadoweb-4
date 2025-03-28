
function sumar(){
	const forma = document.getElementById("forma");
	let operandoA = forma["operandoA"];
	let operandoB = forma["operandoB"];
	let operador = forma["operador"];
	console.log(operador.value);
	let resultado = 0;

	if(operador.value == 'suma'){
		resultado = parseFloat(operandoA.value)  + parseFloat(operandoB.value);
	}else{
		resultado = "no selecionado";
	}

	document.getElementById("resultado").innerHTML = "Resultado: " + resultado; 

}