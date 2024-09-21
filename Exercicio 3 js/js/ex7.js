var nota1 = parseInt(prompt("Insira a primeira nota"))
while(nota1 < 0 || nota1 > 10){
    alert ("Só é aceito valores de 1 a 10")
}
var nota2 = parseInt(prompt("Insira a segunda nota"))
while(nota2 < 0 || nota2 > 10){
    alert ("Só é aceito valores de 1 a 10")
}
var nota3 = parseInt(prompt("Insira a terceira nota"))
while(nota3 < 0 || nota3 > 10){
    alert ("Só é aceito numeros de 1 a 10")
}
var nota4 = parseInt(prompt("insira a quarta nota "))
while(nota4 < 0 || nota4 > 10){
    alert ("Só é aceito numeros de 1 a 0")
}
var nota5 = parseInt(prompt("Insira a quinta nota "))
while(nota5 < 0 || nota5 > 10){
    alert ("Só é aceito numeros de 1 a 10 ")
}
var nota6 = parseInt(prompt("Insira a sexta nota"))
while(nota6 < 0 || nota6 > 10){
    alert ("Só é aceito numeros de 1 a 10")
}
var media = ((nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6)
document.write(media)