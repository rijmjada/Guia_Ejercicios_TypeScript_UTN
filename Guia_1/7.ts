/*
7. Se necesita mostrar por consola los primeros 20 números primos. Para ello realizar una
función.
Nota: Utilizar console.log()
*/

function numerosPrimos() : Array<number>
{
    let primos : Array<number> = [];
    var esPrimo : boolean = true;

    for(let i:number = 2; primos.length < 20; i++)
    {
        for(let j:number = 2; j < i; j++)
        {
            if (i % j == 0)
            {
                esPrimo = false;
            }
        }
        if (esPrimo == true && i != 4)
        {
            primos.push(i);
        }
        else
        {
            esPrimo = true;
        }
    }
    return primos;
}

console.log(numerosPrimos());
