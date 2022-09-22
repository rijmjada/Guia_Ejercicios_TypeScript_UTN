namespace Ejercicio03 {
    export abstract class Persona {
        // Atributos
        private _apellido: string;
        private _nombre: string;
        private _dni: number;
        private _sexo: string;

        // Constructor
        public constructor(apellido: string, nombre: string, dni: number, sexo: string) {
            this._apellido = apellido;
            this._nombre = nombre;
            this._sexo = sexo;
            this._dni = dni;
        }

        // Getters
        public GetApellido(): string {
            return this._apellido;
        }

        public GetNombre(): string {
            return this._nombre;
        }

        public GetDni(): number {
            return this._dni;
        }

        public GetSexo(): string {
            return this._sexo;
        }

        // Metodos
        public abstract Hablar(idioma: string): string;

        public ToString() {
            return `Apellido: ${this.GetApellido()} - Nombre: ${this.GetNombre()} - DNI: ${this.GetDni()} - Sexo: ${this.GetSexo()}`;
        }
    }
}
