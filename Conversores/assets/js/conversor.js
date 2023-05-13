function myFunction() {
    var fahrenheit  = document.getElementById("fahrenheit").value; 
    var kelvin      = (fahrenheit - 32) * (5/9) + 273.15;

    document.getElementById("mostraK").innerHTML = kelvin.toFixed(2).replace(".",",") + " K";
}

function myFunction2() {
     var celsius    = document.getElementById("celsius").value;
     var fahrenheit = (celsius) * (9/5) +32;

     document.getElementById("mostraF").innerHTML = fahrenheit.toFixed(2).replace(".",",") + " F";
}

function myFunction3() {
    var kilowatt    = document.getElementById("kilowatt").value;
    var kwh         = kilowatt * 0.05;

    document.getElementById("mostra$").innerHTML = "R$" + kwh.toFixed(2).replace(".",",");
}

function myFunction4() {
    var reais       = document.getElementById("reais").value;
    var porcento    = document.getElementById("porcento").value;
    var desconto    = porcento / 100;
    var calculo     = reais * desconto;
    var resultado   = reais - calculo;

    document.getElementById("mostradesconto").innerHTML = "R$" + resultado.toFixed(2).replace(".",".");
}

function myFunction5() {
    var reaisA      = parseFloat(document.getElementById("reaisA").value);
    var porcentoA   = parseFloat(document.getElementById("porcentoA").value);
    var acrescimo   = (porcentoA / 100) * reaisA;
    var resultadoA  = reaisA + acrescimo;

    document.getElementById("juros").innerHTML = "R$" + resultadoA.toFixed(2).replace(".",".");
}

function myFunction6() {
    var largura     = parseFloat(document.getElementById("largura").value);
    var comprimento = parseFloat(document.getElementById("comprimento").value);
    var area        = largura * comprimento;
    area            = area.toFixed(2).replace(".",",");

    document.getElementById("mostraarea").innerHTML = area + "²";
}

function myFunction7() {
    var kml     = document.getElementById("kml").value;
    var km      = document.getElementById("km").value;
    var preco   = document.getElementById("preco").value;
    var gasto   = (km / kml) * preco;

    document.getElementById("mostrakm").innerHTML = "R$" + gasto.toFixed(2).replace(".",".");
}
