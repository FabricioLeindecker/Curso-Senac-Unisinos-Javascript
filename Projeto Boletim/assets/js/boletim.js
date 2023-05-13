function myFunction() {
    var nome        = document.getElementById("nome").value;
    var sobrenome   = document.getElementById("sobrenome").value;
    var turma       = document.getElementById("turma").value;
    
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);

    var media   = (nota1 + nota2 + nota3 + nota4) / 4
 
    var resultado = "";
            
    if (media < 3) {
        resultado = "Reprovado"
    }
    else if (media >= 6) {
        resultado = "Aprovado"
    }
    else {
        resultado = "em Recuperação"
    }

    texto = "Olá " + nome + " " + sobrenome + " da turma " + turma + " sua média foi " + media.toFixed(2).replace(".",",") + " e voce está " + resultado; 

    document.getElementById("mostra").innerHTML = texto;
}
