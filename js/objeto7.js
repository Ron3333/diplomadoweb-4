//Funcion constructor de objetos de tipo Persona
// Funcion constructor de objetos de tipo Persona

function Persona(nombre, apellido, email, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.edad = edad;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//al utilzar new se crea un nuevo espacio en memoria
let padre = new Persona('Juan', 'Perez', 'jperez@mail.com', 25);
//console.log( padre );

let madre = new Persona('Maria', 'Perez', 'maria@mail.com',24 );

console.log(madre.nombreCompleto());

let hijo = new Persona("Miguel", "Perez", "miguel@mail.com", 5);

console.log(hijo.nombreCompleto());
console.log(hijo.email);
console.log(hijo.edad);


//let madre = new Persona('Laura', 'Quintero', 'lquintero@mail.com');
//console.log( madre );

//padre.nombre = 'Carlos';

//console.log( padre );
//console.log( madre );