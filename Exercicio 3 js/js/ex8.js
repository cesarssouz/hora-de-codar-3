var n = parseInt(prompt("Insira um valor"))
var inicio = 1

while(n <= 1 ){
    n = parseInt(prompt("Insira um valor maior que 1"))   
}
while( inicio <= n ){
    document.write(inicio + ", ")
    inicio++
}

