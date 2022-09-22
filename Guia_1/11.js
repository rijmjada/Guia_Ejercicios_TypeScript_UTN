"use strict";
/*
11. Definir una función que determine si la cadena de texto que se le pasa como parámetro
es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la
derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural" .
*/
function funcion_11(str) {
    let cadena = str.toLowerCase().replace(/\s+/g, '');
    return cadena == invertirCadena(cadena) ? true : false;
}
function invertirCadena(cad) {
    let nuevaCadena = "";
    for (let i = cad.length - 1; i >= 0; i--) {
        nuevaCadena += cad[i];
    }
    return nuevaCadena;
}
console.log(funcion_11("La ruta nos aporto otro paso natural"));
//# sourceMappingURL=11.js.map