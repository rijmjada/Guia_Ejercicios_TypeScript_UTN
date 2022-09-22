"use strict";
/*
5. Guardar su nombre y apellido en dos variables distintas. Dichas variables serán pasadas
como parámetro de la función MostrarNombreApellido, que mostrará el apellido en
mayúscula y el nombre solo con la primera letra en mayúsculas y el resto en minúsculas.
El apellido y el nombre se mostrarán separados por una coma (,).
Nota: Utilizar console.log()
*/
// charAt() - Retorna el caracter en el indice recibido por parametro
// slice()  - Retornara un string  recibe por parametro los indices de inicio y final(opcional
function MostrarNombreApellido(nombre, apellido) {
    console.log(`${apellido.toUpperCase()} ,  ${nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase()}`);
}
MostrarNombreApellido("diego", "ormeño");
//# sourceMappingURL=5.js.map