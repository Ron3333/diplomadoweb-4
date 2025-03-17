let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 50,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido + ' ' +this.telefono;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara',
    telefono: '45887777'
}

//Uso de call para usar 
//el metodo persona1.nombreCompleto con los datos del persona2
console.log( persona1.nombreCompleto() );

console.log( persona1.nombreCompleto.call( persona2 ) );