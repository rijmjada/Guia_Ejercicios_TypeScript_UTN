/// <reference path="./FiguraGeometrica.ts" />

export class Rectangulo extends Figura.FiguraGeometrica
{

    // Atributos
    protected _lado2: number;
    protected _lado1: number;

    // Constructor
    public constructor(color: string, l1: number, l2: number)
    {
        super(color)
        this._lado1 = l1;
        this._lado2 = l2;
        this.CalcularDatos();
    }

    // Metodos
    public Dibujar(): string {
        return "\n*******\n*******\n*******";
    }

    protected CalcularDatos(): void {
        super._perimetro = 22//(2*this._lado1) + (2*this._lado2);
        super._superficie = 23//this._lado1 * this._lado2;
    }

    public GetColor(): string{
        return this._color;
    }

    public ToString(): string
    {
        let str: string = "";

        str += `Color: ${this.GetColor()}\n`;
        str += `Perimetro: ${super._perimetro}\n`;
        str += `Superficie: ${super._superficie}\n`;
        str += `Lado 1: ${this._lado1}\n`;
        str += `Lado 2: ${this._lado2}\n`;
        str += `Dibujo: ${this.Dibujar()}\n`;    
        
        return str;
    }
}