let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//console.log( persona.nombre);
//console.log( persona['apellido'] );

//for in

for( nombrePropiedad in persona){
    console.log( nombrePropiedad , ": ");
    console.log( persona[nombrePropiedad]);
    //console.log( persona.nombrePropiedad);
}



// ciclo 
/*
let datos =[1,50,10,60];

for(dato of datos){
    console.log(dato);
}
*/

