"use strict";
/// <reference path="./FiguraGeometrica.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangulo = void 0;
class Rectangulo extends Figura.FiguraGeometrica {
    // Constructor
    constructor(color, l1, l2) {
        super(color);
        this._lado1 = l1;
        this._lado2 = l2;
        this.CalcularDatos();
    }
    // Metodos
    Dibujar() {
        return "\n*******\n*******\n*******";
    }
    CalcularDatos() {
        super._perimetro = 22; //(2*this._lado1) + (2*this._lado2);
        super._superficie = 23; //this._lado1 * this._lado2;
    }
    GetColor() {
        return this._color;
    }
    ToString() {
        let str = "";
        str += `Color: ${this.GetColor()}\n`;
        str += `Perimetro: ${super._perimetro}\n`;
        str += `Superficie: ${super._superficie}\n`;
        str += `Lado 1: ${this._lado1}\n`;
        str += `Lado 2: ${this._lado2}\n`;
        str += `Dibujo: ${this.Dibujar()}\n`;
        return str;
    }
}
exports.Rectangulo = Rectangulo;
