var inicio = 30
var fim = 0
var contagem = document.getElementById("contagem")

var intervalo = setInterval(function() {
contagem.innerHTML = inicio
inicio--

if (inicio < fim){
    clearInterval(intervalo)
    contagem.innerHTML = "a bomba explodiu"
    document.write("A bomba explodiu")

    }

}, 1000)
