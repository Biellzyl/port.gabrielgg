function copiarEmail() {

    var email = "gabriel0897736@gmail.com";

    navigator.clipboard.writeText(email);

    document.getElementById("mensagem").innerHTML =
        "E-mail copiado na Area de Tranferencia";

}


function copiarTelefone() {

    var telefone = "(19) 971698678";

    navigator.clipboard.writeText(telefone);

    document.getElementById("mensagem").innerHTML =
        "Número de telefone copiado na area de Transferencia";

}