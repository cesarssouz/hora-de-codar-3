var nomedoaluno = ""
var nota1 = ""
var nota2 = ""
var quantidade = 0
var media = 0

function primeiranota() {
    nota1 = parseFloat(prompt("Qual sua nota?"))
    if (isNaN(nota1)) {
        alert("Insira numeros validos")
        primeiranota()
    } else if (nota1 < 0 || nota1 > 10) {
        alert("Insira uma nota ")
        primeiranota()
    } else {
        segundanota()
    }
}
function segundanota() {
    nota2 = parseFloat(prompt("Qual sua nota?"))
    if (isNaN(nota2)) {
        alert("Insira numeros validos")
        segundanota()
    } else if (nota2 < 0 || nota2 > 10) {
        alert("Insira uma nota ")
        segundanota()
    } else {
        vermedia()
    }
}
function aluno() {
    var nomedoaluno = prompt("Qual o seu nome?")
    if (!isNaN(nomedoaluno) || nomedoaluno == "") {
        alert("Escreva um nome")
        aluno()
    } else {
        primeiranota()
    }
}
aluno()

function inicio() {
    var escolha = parseInt(prompt("Calcular a média de outro aluno Sim = 1 /Não = 2?"))
    switch (escolha) {
        case 2:
            nao()
            break
        case 1:
            aluno()
            break
        default:
            erro()
            break

    }
}
function erro(){
    alert ("Por favor informe sim ou não")
    inicio()
}
function vermedia(){
    media = ((nota1 + nota2) / 2)
    if (media >= 9.5){
        quantidade++
        alert ("Esse aluno foi aprovado")
        inicio()

    }else{
        alert ("Esse aluno reprovou")
        inicio()
    }
}
function nao(){
  document.write("A quantidade de alunos aprovados foram " + quantidade)
}