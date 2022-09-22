/*
9. Realizar una función que solicite (por medio de un parámetro) un número. Si el número
es positivo, se mostrará el factorial de ese número, caso contrario se mostrará el cubo de
dicho número.
Nota: Reutilizar la función que determina el factorial de un número y la que calcula el
cubo de un número.*/

import { calcular_Cubo } from "./6";
import { factorial } from "./8";

function ejercicio_9(numero:number) : number
{
    return numero > 0 ? factorial(numero) : calcular_Cubo(numero);
}

//console.log(ejercicio_9(2));