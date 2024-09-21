var entre_24_e_42 = 0
var fora_do_intervalo = 0
var quantidade = 0

while (quantidade < 10) {
    var valor = parseInt(prompt("Digite um valor"))

    if (valor >= 24 && valor <= 42) {
        entre_24_e_42++
    } else {
        fora_do_intervalo++
    }

    quantidade++
}

document.write("A quantidade de números entra 24 e 42 é: " + entre_24_e_42 + ". E a Quantidade de números que não estão entre 24 e 42 é " + fora_do_intervalo)