"use strict";
/*
6. Realizar una función que reciba como parámetro un número y que retorne el cubo del
mismo.
Nota: La función retornará el cubo del parámetro ingresado. Realizar una función que
invoque a esta última y permita mostrar por consola el resultado.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcular_Cubo = void 0;
function calcular_Cubo(numero) {
    let repeticiones = 3;
    let retorno = numero;
    while (repeticiones > 1) {
        retorno *= numero;
        repeticiones--;
    }
    return retorno;
}
exports.calcular_Cubo = calcular_Cubo;
//console.log(calcular_Cubo(10));
//# sourceMappingURL=6.js.map