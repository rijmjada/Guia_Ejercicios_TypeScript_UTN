
/// <reference path="./persona.ts" /> 

namespace Ejercicio03 {
    export class Empleado extends Persona {

        // Atributos
        protected _legajo: number;
        protected _sueldo: number;

        // Constructor
        public constructor(apellido: string, nombre: string, dni: number, sexo: string, legajo: number, sueldo: number) {
            super(apellido, nombre, dni, sexo);
            this._legajo = legajo;
            this._sueldo = sueldo;
        }

        // Getters
        public GetLegajo(): number {
            return this._legajo;
        }

        public GetSueldo(): number {
            return this._sueldo;
        }

        // Metodos
        public Hablar(idioma: string): string {
            return `El empleado habla ${idioma}.`;
        }

        public ToString(): string {
            return `${super.ToString()} - Legajo: ${this.GetLegajo()} - Sueldo: ${this.GetSueldo()}`;
        }
    }
}

