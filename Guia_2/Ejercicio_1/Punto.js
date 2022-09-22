"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Punto = void 0;
class Punto {
    // Constructor
    constructor(x, y) {
        this.eje_x = x;
        this.eje_y = y;
    }
    // Metodos Getters
    GetX() {
        return this.eje_x;
    }
    GetY() {
        return this.eje_y;
    }
}
exports.Punto = Punto;
