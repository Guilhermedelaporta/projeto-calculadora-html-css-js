function clearDisplay() { //clearDisplay(): Localiza o elemento com id="display" e define seu valor como uma string vazia, removendo qualquer conteúdo do display.
    document.getElementById("display").value = ""; // Limpa o conteúdo do display //
}

function appendToDisplay(value) { //appendToDisplay(value): Recebe um valor (número ou operador) e o adiciona ao final do conteúdo atual do display.
    document.getElementById("display").value += value; /// Adiciona o valor ao final do conteúdo atual no display
}

function calculate() {
    try {
        let result = eval(document.getElementById("display").value); // Avalia a expressão contida no display
        document.getElementById("display").value = result; // Exibe o resultado no display
    } catch (error) {
        document.getElementById("display").value = "Erro"; // Em caso de erro, exibe "Erro" no display
    }
}
