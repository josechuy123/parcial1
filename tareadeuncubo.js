/*
// funciona como un dado
function dado()
{
    var resul = Math.floor(Math.random()*6+1)

    return resul;
}

console.log(dado());*/
// funciona como un dado y muestre los 10 resultados, hacerlo 10 veces 


    function dado()
    {
        var resul = Math.floor(Math.random()*6+1)
        return resul;
    }
    console.log(dado());

    for(var i=0;i<10; i++)
    {
        console.log(dado());
    }