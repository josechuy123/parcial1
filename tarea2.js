//tarea 2

function exponente2(n)
{
    var constante=1;
    var resultado=0;
    var factorial=1;
    for(var i=1; i<=n; i++)
    {
        factorial*=i;
        resultado+=constante+(n**i/factorial);
        constante=0;
    }

    return resultado;
}
console.log(exponente2(1));