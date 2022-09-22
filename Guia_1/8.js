"use strict";
/*
8. Crear una función que realice el cálculo factorial del número que recibe como parámetro.
Nota: Utilizar console.log()*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = void 0;
function factorial(n) {
    return n == 0 ? 1 : (n * factorial(n - 1));
}
exports.factorial = factorial;
//console.log(factorial(5))
//# sourceMappingURL=8.js.map