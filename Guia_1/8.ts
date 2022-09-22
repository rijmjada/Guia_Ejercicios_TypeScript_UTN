/*
8. Crear una función que realice el cálculo factorial del número que recibe como parámetro.
Nota: Utilizar console.log()*/

export function factorial(n:number) : number
{
    return n == 0 ? 1 : (n * factorial(n-1))
}

//console.log(factorial(5))