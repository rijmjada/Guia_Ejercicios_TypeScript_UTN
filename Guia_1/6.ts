/*
6. Realizar una función que reciba como parámetro un número y que retorne el cubo del
mismo.
Nota: La función retornará el cubo del parámetro ingresado. Realizar una función que
invoque a esta última y permita mostrar por consola el resultado.
*/


export function calcular_Cubo(numero: number): number {
    let repeticiones: number = 3;
    let retorno: number = numero;
    while (repeticiones > 1) {
        retorno *= numero;
        repeticiones--;
    }
    return retorno;
}

//console.log(calcular_Cubo(10));