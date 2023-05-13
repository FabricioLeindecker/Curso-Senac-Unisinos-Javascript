function myFunction() {
    var nome            = document.getElementById("nome").value;
    var sobrenome       = document.getElementById("sobrenome").value;
    var peso            = document.getElementById("peso").value.replace(",",".");
    var altura          = document.getElementById("altura").value.replace(",",".");
    var genero          = document.querySelector('input[name="texto"]:checked'). value;
    var imc             = peso / (altura * altura);
    var classificacao   = "";
    var grauObesidade   = 0;
    var texto           = "";

    if (genero === "M") {
        switch (true) {
            case imc < 20:
                classificacao = "Abaixo do peso";
                grauObesidade = 0;
            break;

            case imc < 25:
                classificacao = "Normal";
                grauObesidade = 0;
                break;

            case imc < 30:  
                classificacao = "Acima do peso";
                grauObesidade = 0;
                break;

            case imc < 35:  
                classificacao = "Obesidade grau 1";
                grauObesidade = 1;
                break;

            case imc < 40:  
                classificacao = "Obesidade grau 2";
                grauObesidade = 2;
                break;

            default:  
                classificacao = "Obesidade grau 3";
                grauObesidade = 3;
        }
    }

    else {
        switch (true) {
            case imc < 19:
                classificacao = "Abaixo do peso";
                grauObesidade = 0;
            break;

            case imc < 24:
                classificacao = "Normal";
                grauObesidade = 0;
                break;

            case imc < 29:  
                classificacao = "Acima do peso";
                grauObesidade = 0;
                break;

            case imc < 34:  
                classificacao = "Obesidade grau 1";
                grauObesidade = 1;
                break;

            case imc < 39:  
                classificacao = "Obesidade grau 2";
                grauObesidade = 2;
                break;

            default:  
                classificacao = "Obesidade grau 3";
                grauObesidade = 3;
        }
    }

    if (grauObesidade === 0 || grauObesidade === 1) {
        texto = ""
    }
    else if (grauObesidade === 2){
        texto = "Cuidado! Você está acima do peso recomendado pela OMS.";
    }
    else{
        texto = "É importante procurar um médico para avaliar sua saúde.";
    }

    document.getElementById("mostra").innerHTML = "Olá " + nome + " " + sobrenome + " seu IMC é " + imc.toFixed(2).replace(".",",");
    document.getElementById("grau").innerHTML = "Sua classificação é " + classificacao;
    document.getElementById("alerta").innerHTML = texto;
}