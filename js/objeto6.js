let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    _idioma: 'es',
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    },
    get idioma(){
        return this._idioma.toUpperCase();
    },
    set idioma( lenguaje ){
        this._idioma = lenguaje.toUpperCase();
    }
}


persona.idioma = "xx" ;

console.log( persona.idioma);


