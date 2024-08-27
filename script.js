const textArea = document.querySelector(".area__texto");
const mensagem = document.querySelector(".mensagem");
const botaoCriptografia = document.querySelector(".botao__criptografar");
const imagem = document.querySelector(".boneco");
const nenhumaMensagem = document.querySelector(".nenhuma__mensagem");
const botaoCopia = document.querySelector(".botao__copiar");



function botaoCriptografar() {
    const textoCriptografado = criptografar(textArea.value);
    mensagem.innerHTML = textoCriptografado;
    textArea.value = "";
    imagem.style.display = "none";
    mensagem.style.display = "block";
    botaoCopia.style.display = "block";
    nenhumaMensagem.style.display = "none";

}

function criptografar(stringCriptografada) {

    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]]

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringCriptografada.includes(matrizCodigo[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringCriptografada;
}

function botaoDescriptografar() {
    const textoDescriptografado = Descriptografar(textArea.value);
    mensagem.innerHTML = textoDescriptografado;
    textArea.value = "";
    imagem.style.display = "none";
    mensagem.style.display = "block";
    botaoCopia.style.display = "block";
    nenhumaMensagem.style.display = "none";
}

function Descriptografar(stringDescriptografada) {
    let matrizCodigo = [["e", "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]]

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDescriptografada.includes(matrizCodigo[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    
    return stringDescriptografada;
}

function botaoCopiar() {
    var copiarTexto = document.getElementById("mensagem");
    navigator.clipboard.writeText(copiarTexto.innerHTML);
}

function removerAcentos(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9\s]/g, "");
}

document.getElementById("input").addEventListener("input", function (event) {
    let texto = event.target.value;
    texto = removerAcentos(texto).toLowerCase();
    event.target.value = texto;
});