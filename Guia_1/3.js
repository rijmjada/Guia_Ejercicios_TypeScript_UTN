"use strict";
/*
3. Realizar una función que reciba un parámetro requerido de tipo numérico y otro opcional
de tipo cadena. Si el segundo parámetro es recibido, se mostrará tantas veces por
consola, como lo indique el primer parámetro. En caso de no recibir el segundo
parámetro, se mostrará el valor inverso del primer parámetro.
*/
function ejercicio_3(numero, opcional) {
    if (opcional != null) {
        while (numero > 0) {
            console.log(opcional);
            numero--;
        }
    }
    else {
        console.log(numero * -1);
    }
}
ejercicio_3(3, "saraza");
//# sourceMappingURL=3.js.map