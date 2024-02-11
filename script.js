function criptografar() {
    var texto = document.querySelector(".codificar textarea").value.toLowerCase();
    var txtCifrado = texto.replace(/e/g, "enter");
    txtCifrado = txtCifrado.replace(/o/g, "ober");
    txtCifrado = txtCifrado.replace(/i/g, "imes");
    txtCifrado = txtCifrado.replace(/a/g, "ai");
    txtCifrado = txtCifrado.replace(/u/g, "ufat");

    document.querySelector(".texto_1").textContent = "Texto Criptografado:";
    document.querySelector(".texto_2").value = txtCifrado;
}

function descodificar() {
    var texto = document.querySelector(".codificar textarea").value.toLowerCase();
    var txtDecifrado = texto.replace(/enter/g, "e");
    txtDecifrado = txtDecifrado.replace(/ober/g, "o");
    txtDecifrado = txtDecifrado.replace(/imes/g, "i");
    txtDecifrado = txtDecifrado.replace(/ai/g, "a");
    txtDecifrado = txtDecifrado.replace(/ufat/g, "u");

    document.querySelector(".texto_1").textContent = "Texto Descriptografado:";
    document.querySelector(".texto_2").value = txtDecifrado;
}

function copiar() {
    var textoCopiado = document.querySelector(".texto_2");
    textoCopiado.select();
    document.execCommand("copy");
    alert("Seu texto foi copiado com sucesso!");
}
