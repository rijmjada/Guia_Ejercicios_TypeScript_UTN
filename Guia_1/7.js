"use strict";
/*
7. Se necesita mostrar por consola los primeros 20 números primos. Para ello realizar una
función.
Nota: Utilizar console.log()
*/
function numerosPrimos() {
    let primos = [];
    var esPrimo = true;
    for (let i = 2; primos.length < 20; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                esPrimo = false;
            }
        }
        if (esPrimo == true && i != 4) {
            primos.push(i);
        }
        else {
            esPrimo = true;
        }
    }
    return primos;
}
console.log(numerosPrimos());
//# sourceMappingURL=7.js.map