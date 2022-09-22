/*
4. Realizar una función que reciba un número y que muestre (por consola) un mensaje
como el siguiente:
El número 5 es impar , siendo 5 el número recibido como parámetro.
*/

function ejercicio_4(numero: number): string {
    if (numero % 2 == 0)
        return `El numero ${numero} es par.`
    else
        return `El numero ${numero} es impar.`
}

console.log(ejercicio_4(5))