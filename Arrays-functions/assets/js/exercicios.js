function myFunction() {
    const cores     = ["Azul","Amarelo","Verde","Lilás","Cinza"];
    const numero    = Number(document.getElementById("numero").value);

    document.getElementById("mostra").innerHTML = "Você deve usar a cor " + cores[numero - 1];
}
