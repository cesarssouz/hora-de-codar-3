
    let num1 = parseInt(prompt("Insira o primeiro valor"))
    let num2 = parseInt(prompt("Insira o segundo valor "))

    if(isNaN(num1)||isNaN(num2)){
        alert ("Por favor insira numeros validos")
    }else if(num2 === 0){
        alert ("Não podemos dividir por zero")
    }else{
        let resultado = num1 / num2
        alert ("O resultado é " + resultado)
    }