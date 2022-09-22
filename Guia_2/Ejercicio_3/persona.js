"use strict";
var Ejercicio03;
(function (Ejercicio03) {
    class Persona {
        // Constructor
        constructor(apellido, nombre, dni, sexo) {
            this._apellido = apellido;
            this._nombre = nombre;
            this._sexo = sexo;
            this._dni = dni;
        }
        // Getters
        GetApellido() {
            return this._apellido;
        }
        GetNombre() {
            return this._nombre;
        }
        GetDni() {
            return this._dni;
        }
        GetSexo() {
            return this._sexo;
        }
        ToString() {
            return `Apellido: ${this.GetApellido()} - Nombre: ${this.GetNombre()} - DNI: ${this.GetDni()} - Sexo: ${this.GetSexo()}`;
        }
    }
    Ejercicio03.Persona = Persona;
})(Ejercicio03 || (Ejercicio03 = {}));
