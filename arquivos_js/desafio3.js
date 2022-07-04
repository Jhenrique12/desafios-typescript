"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
// let botaoAtualizar = document.getElementById('atualizar-saldo');
// let botaoLimpar = document.getElementById('limpar-saldo');
// let soma = document.getElementById('soma');
// let campoSaldo = document.getElementById('campo-saldo');
// campoSaldo.innerHTML = 0
// function somarAoSaldo(soma) {
//     campoSaldo.innerHTML += soma;
// }
// function limparSaldo() {
//     campoSaldo.innerHTML = '';
// }
// botaoAtualizar.addEventListener('click', function () {
//     somarAoSaldo(soma.value);
// });
// botaoLimpar.addEventListener('click', function () {
//     limparSaldo();
// });
// Resolucao (uma maneira de varias outras):
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0; //criando variavel do tipo number para somar com a variavel soma
function somarAoSaldo(soma) {
    saldoTotal += soma;
    campoSaldo.innerHTML = saldoTotal.toString(); //adicionando ao HTML do campoSaldo o resultado da soma no formato de string
}
function limparSaldo() {
    saldoTotal = 0;
    campoSaldo.innerHTML = saldoTotal.toString();
}
botaoAtualizar.addEventListener('click', () => {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
