"use strict";
/// <reference path="./persona.ts" /> 
var Ejercicio03;
(function (Ejercicio03) {
    class Empleado extends Ejercicio03.Persona {
        // Constructor
        constructor(apellido, nombre, dni, sexo, legajo, sueldo) {
            super(apellido, nombre, dni, sexo);
            this._legajo = legajo;
            this._sueldo = sueldo;
        }
        // Getters
        GetLegajo() {
            return this._legajo;
        }
        GetSueldo() {
            return this._sueldo;
        }
        // Metodos
        Hablar(idioma) {
            return `El empleado habla ${idioma}.`;
        }
        ToString() {
            return `${super.ToString()} - Legajo: ${this.GetLegajo()} - Sueldo: ${this.GetSueldo()}`;
        }
    }
    Ejercicio03.Empleado = Empleado;
})(Ejercicio03 || (Ejercicio03 = {}));
