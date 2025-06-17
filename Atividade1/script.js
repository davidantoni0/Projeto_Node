let numero = 0;

function atualizarDisplay() {
    document.getElementById("numeroDisplay").textContent = numero;
}

function adicionarNumero(){
    numero ++;
    atualizarDisplay();
}

function subtrairNumero(){
    numero --;
    atualizarDisplay();
}

function limparNumero() {
    numero = 0;
    atualizarDisplay();
}




document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnAdicionar").addEventListener("click", adicionarNumero);
    document.getElementById("btnSubtrair").addEventListener("click", subtrairNumero);
    document.getElementById("btnLimpar").addEventListener("click", limparNumero);
});