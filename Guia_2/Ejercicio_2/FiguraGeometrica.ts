namespace Figura {
    export abstract class FiguraGeometrica {
        // Atributos
        protected _color: string;
        protected _perimetro!: number;
        protected _superficie!: number;

        // Constructor
        public constructor(color: string) {
            this._color = color;
        }

        // Metodos
        public abstract Dibujar(): string;

        protected abstract CalcularDatos(): void;

        public abstract ToString(): string;
    }
}
