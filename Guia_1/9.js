"use strict";
/*
9. Realizar una función que solicite (por medio de un parámetro) un número. Si el número
es positivo, se mostrará el factorial de ese número, caso contrario se mostrará el cubo de
dicho número.
Nota: Reutilizar la función que determina el factorial de un número y la que calcula el
cubo de un número.*/
Object.defineProperty(exports, "__esModule", { value: true });
const _6_1 = require("./6");
const _8_1 = require("./8");
function ejercicio_9(numero) {
    return numero > 0 ? (0, _8_1.factorial)(numero) : (0, _6_1.calcular_Cubo)(numero);
}
//console.log(ejercicio_9(2));
//# sourceMappingURL=9.js.map