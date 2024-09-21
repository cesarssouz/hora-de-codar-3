var um = 1
var n = parseInt(prompt("Digite um numero"))
var x = 1

while(um <= n){
    document.write("<h1> Tabuada do " + um + "</h1>")
    while(x <= 10){
        document.write(um + " x " + x + " = " + (um * x) + "<br>")
        x++
    }
    document.write("<br>")
    um++
    x = 1
}
