
//funcion para que el dado se aviente y caiga dentro de las 6 caras del dado
function dado()
{
    var resultado = Math.floor(Math.random()*6+1)
    return resultado;
}
   //crear un vector de 6 posiciones con valor de 0 en cada una
   var vec=new Array(0,0,0,0,0,0);
for(var i=0;i<100;i++)//un for para que esto se realize 100 veces de 0 a 99
{
    cara=dado();//mandamos llamar la funcion dado igualandola a otra variable para que se lanze el dado
                //y lo que salga lo iguala a cara
    if(cara==1)
        vec[0]++; //si la cara es igual a 1 se guarda en la posicion 0 del vector y se suma 1 cada vez 
                    //que caiga ese valor e igual en todos
    else if(cara==2)
        vec[1]++;
    else if(cara==3)
        vec[2]++;
    else if(cara==4)
        vec[3]++;
    else if(cara==5)
        vec[4]++;
    else if(cara==6)
        vec[5]++;
}
console.log("En 100 tiros estos fueron los resultados")
for(var i = 0; i<6; i++)//imprime desde 0 hasta menor a 6
{
    console.log(" cara " + (i+1) + " cayo " + vec[i] + " veces ") // se pone i+1 para que la posicion 0 tenga el 1
    //pues en los dados no hay cara 0, no se mueve slo cambio el valor
}
