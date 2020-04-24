class Rectangulo{
    constructor(base,altura)
    {
        this.base = base;
        this.altura = altura;
    }
    area(){
        return this.base*this.altura;
    }
}
class Triangulo{
    constructor(base,altura)
    {
        this.base = base;
        this.altura = altura;
    }
    area(){
        return this.base*this.altura/2;
    }
}

class Cuadrado{
    constructor(lado1,lado2){
        this.lado1 = lado1;
        this.lado2 = lado2;
    }
    area()
    {
        return this.lado1*this.lado2;
    }
}

//esto es para conectar con nuestro html
const btn=document.getElementById("btnRectangulo");
//esto hace referencia al boto, ahora debemos asociarle el
//comportamiento click
btn.addEventListener('click', ()=>{
    let base=document.getElementById("labase").value;
    let altura=document.getElementById("altura").value;
  
    //Esta informacion  a este punto es texto, ej"3" se debe
    //convertir el texto 3 a numero 3
    base=parseInt(base);
    altura=parseInt(altura);
    //se pudo haber hecho en una sola linea

    //let altura=parseInt(document.getElementById("altura").value);
    //ahora crearemos nuestro rectangulo
    let rect1=new Rectangulo (base,altura);
    let divRes=document.getElementById("resultados");
    //aqui anidamor mas etiquetas mediante innerHTML
    divRes.innerHTML+="<div class='card-body bg-info'><h2>Rectangulo con base " + rect1.base + " y altura "+ rect1.altura + "</h2>";
    divRes.innerHTML+=" <h2> con un area de =" + rect1.area() +" metros cuadrados "+ "</h2></div>";

});

//esto es para conectar con nuestro html
const btn2=document.getElementById("btnTriangulo");
//esto hace referencia al boto, ahora debemos asociarle el
//comportamiento click
btn2.addEventListener('click', ()=>{
    let base=document.getElementById("labase").value;
    let altura=document.getElementById("altura").value;
    //Esta informacion  a este punto es texto, ej"3" se debe
    //convertir el texto 3 a numero 3
    base=parseInt(base);
    altura=parseInt(altura);
    //se pudo haber hecho en una sola linea
    //let altura=parseInt(document.getElementById("altura").value);
    //ahora crearemos nuestro rectangulo
    let trian1=new Triangulo (base,altura);
    let divRes=document.getElementById("resultados");
    //aqui anidamor mas etiquetas mediante innerHTML
    divRes.innerHTML+="<div class='card-body bg-info'><h2>Triangulo con base " + trian1.base + " y altura "+ trian1.altura + "</h2>";
    divRes.innerHTML+=" <h2> con un área de = " + trian1.area() + " metros cuadrados" + "</h2> </div>";
});
const btn3=document.getElementById("btnCuadrado");
btn3.addEventListener('click', ()=>{
    let lado1 = document.getElementById("lado").value;
    let lado2 = document.getElementById("ellado").value;

    lado1=parseInt(lado1);
    lado2=parseInt(lado2);
    let cuadr1=new Cuadrado(lado1,lado2);
    let divRes=document.getElementById("resultados");

    divRes.innerHTML+="<div class='card-body bg-info'><h2>Cuadrado con un lado de " + cuadr1.lado1 + " y otro lado de " + cuadr1.lado2 + "</h2>";
    divRes.innerHTML+="<h2> con un área de = " + cuadr1.area() + " metros cuadrados " + "</h2> </div>";
});