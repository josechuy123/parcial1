
/*function sumapares(cuantos) //devuelve la sumas de los primeros cuantos pares
{
    var sumatoria=0;
    for(var i=0; i<=cuantos*2;i++)
    {
        if(i%2==0)
        {
            sumatoria+=i;
        }
    }
    return sumatoria;
}
var n=5;
console.log(sumapares(n));*/


/*function sumapares(cuantos) //suma pares hasta incompleta
{
    var sumatoria=0;
    for(var i=0; i<=cuantos*2;i++)
    {
        if(i%2==0)
        {
            sumatoria+=i;
        }
    }
    return sumatoria;
}
var n=5;
console.log(sumapares(n));*/
var n =100000;
function serie1(n)
{
    var suma=0,signo=1, divide=1;
    for( var i=0; i<n; i++)
    {
        suma+= signo*(4/divide);
        signo*=-1;
        divide+=2;
    }
    return suma;
}

console.log(serie1(n));