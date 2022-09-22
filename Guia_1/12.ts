/*
12. Crear una función que reciba como único parámetro una cadena que contenga el día, mes
y año de nacimiento de una persona (con formato dd-mm-yyyy). La función mostrará por
consola a que signo corresponde dicha fecha de nacimiento.
Nota: Para descomponer la fecha recibida como parámetro utilice la función split.
*/

function funcion_12(fecha: string): string {
    let separador = "-";
    let arrayFecha = fecha.split(separador);

    return signos(parseInt(arrayFecha[0]), parseInt(arrayFecha[1]));
}


function signos(dia: number, mes: number): string {
    let signo: string = "";
    switch (mes) {
        case 1:
            dia >= 21 ? signo = "Acuario" : signo ="Capricornio";
            break;
        case 2:
            dia >= 20 ? signo = "Piscis" : signo = "Acuario";
            break;
        case 3:
            dia >= 21 ? signo = "Aries" : signo = "Piscis";
            break;
        case 4:
            dia >= 21 ? signo = "Tauro" : signo = "Aries";
            break;
        case 5:
            dia >= 22 ? signo = "Geminis" : signo = "Tauro";
            break;
        case 6:
            dia >= 22 ? signo = "Cáncer" : signo = "Geminis";
            break;
        case 7:
            dia >= 24 ? signo = "Leo" : signo = "Cáncer";
            break;
        case 8:
            dia >= 24 ? signo = "Virgo" : signo = "Leo";
            break;
        case 9:
            dia >= 24 ? signo = "Libra" : signo = "Virgo";
            break;
        case 10:
            dia >= 24 ? signo = "Escorpio" : signo = "Libra";
            break;
        case 11:
            dia >= 23 ? signo = "Sagitario" : signo = "Escorpio";
            break;
        case 12:
            dia >= 23 ? signo = "Capricornio" : signo = "Sagitario";
            break;

    }

    return signo;
}

console.log(funcion_12("15-06-1986"));