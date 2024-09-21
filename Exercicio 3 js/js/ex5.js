var valor1 = parseInt(prompt("Insira o primeiro valor"))
var valor2 = parseInt(prompt("Insira o segundo valor"))
var soma = 0
var quantidade = 0

while(isNaN(valor1)){
    alert ("Insira valores validos")
    var valor1 = parseInt(prompt("Insira o primeiro valor"))

}
while(isNaN(valor2)){
    alert ("Insira valores validos")
    var valor2 = parseInt(prompt("Insira o primeiro valor"))

}
while(valor2 <= valor1){
    alert ("Insira um valor menor que o primeiro")
    var valor2 = parseInt(prompt("Insira o segundo valor"))
}
while (valor1 <= valor2){
    soma = soma + valor1
    valor1++
    quantidade++
}
var media = soma / quantidade

alert ("A media é " +media)