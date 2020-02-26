// esta parte es para hacer el dado 
function dado()
    {
        var resul = Math.floor(Math.random()*6+1)
        return resul;
    }
 //console.log(dado());//

  // para imprimir lo que te dio el dado y muestra las posiciones que avanza
 function avanza()
 {
    var cara=dado();
    var avance;
    
    if(cara==6)
        avance= 3;
    else if(cara==5 || cara==4 || cara==3)
        avance= 2;
    else if(cara==2 || cara==1)
        avance= 1;
    console.log( "cayo "  + cara +  " avanzas --> " + avance + " posiciones ");    
    return avance;
 }
var corr1, corr2;
corr1=0;
corr2=0;
corr1+=avanza();
corr2+=avanza();
while(corr1 <= 100 && corr2 <= 100)
{
corr1 += avanza();
corr2+=avanza();

}
console.log(corr1 + "  " + corr2);

if(corr1>=100 && corr2>=100)
    console.log("empate");
else if(corr1>=100)
    console.log("gano corredor 1 ");
    else
    console.log("gano corredor 2 ");

