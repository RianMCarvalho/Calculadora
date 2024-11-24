function inserirDisplay(character) {
    document.getElementById('display').value += character;
}

function limparDisplay() {
    document.getElementById('display').value = '';
}

function apagarDisplay() {
    let currentDisplay = document.getElementById("display").value;
    currentDisplay = currentDisplay.slice(0, -1);
    document.getElementById("display").value = currentDisplay;
}

function calcular() {
    let expressao = document.getElementById('display').value;
    let numeros = [];
    let operadores = [];
    let numeroAtual = '';

    for (let char of expressao) {
        if ('+-*/'.includes(char)) {
            numeros.push(parseFloat(numeroAtual));
            operadores.push(char);
            numeroAtual = '';
        } else {
            numeroAtual += char;
        }
    }
    numeros.push(parseFloat(numeroAtual)); 
    while (operadores.length > 0) {
        let operador = operadores.shift();
        let num1 = numeros.shift();
        let num2 = numeros.shift();

        let resultado;
        switch (operador) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '*':
                resultado = num1 * num2;
                break;
            case '/':
                resultado = num1 / num2;
                break;
        }
        numeros.unshift(resultado); 
    }
    document.getElementById('display').value = numeros[0];
}
