"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangulo = void 0;
const Punto_1 = require("./Punto");
class Rectangulo {
    constructor(v1, v3) {
        this._vertice1 = v1;
        this._vertice3 = v3;
        this._vertice2 = new Punto_1.Punto(v3.GetX(), v1.GetY());
        this._vertice4 = new Punto_1.Punto(v1.GetX(), v3.GetY());
        this._ladoUno = this._vertice2.GetX() - this._vertice1.GetX();
        this._ladoDos = this._vertice4.GetY() - this._vertice1.GetY();
        this._area = this._ladoDos * this._ladoUno;
        this._perimetro = (2 * this._ladoDos) + (2 * this._ladoUno);
    }
    // Getters
    GetArea() {
        return this._area;
    }
    GetPerimetro() {
        return this._perimetro;
    }
    ToString() {
        return `Lado Uno: ${this._ladoUno} - Lado Dos: ${this._ladoDos}`;
    }
}
exports.Rectangulo = Rectangulo;
