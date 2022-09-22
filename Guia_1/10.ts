/*
10. Definir una función que muestre información sobre una cadena de texto que se le pasa
como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena
está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

function funcion_10(str: string): string {
    let mayúsculas: boolean = false;
    let minúsculas: boolean = false;

    if (str != null) {
        for (let i = 0; i < str.length; i++) {
            esMayuscula(str[i]) == true ? mayúsculas = true : minúsculas = true;
            if (mayúsculas && minúsculas)
                break;
        }
        return determinarMayMin(mayúsculas, minúsculas);
    }
    else {
        return "la cadena esta vacia";
    }
}

function determinarMayMin(mayúsculas: boolean, minúsculas: boolean): string {
    let retorno = "La cadena esta compuesta por: ";
    if (mayúsculas && minúsculas) {
        retorno += "mayúsculas y minúsculas";
    }
    else {
        if (mayúsculas)
            retorno += "mayúsculas";
        else
            retorno += "minúsculas";
    }
    return retorno;
}

function esMayuscula(str: string): boolean {
    return str === str.toUpperCase();
}



