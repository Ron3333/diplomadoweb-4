
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido + ' ' + this.edad + ' ' + 'años de edad';
    }
}

console.log(persona.nombreCompleto());