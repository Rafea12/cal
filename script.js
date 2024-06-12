function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function appendSymbol(symbol) {
    let display = document.getElementById('display');
    display.value += symbol;
}

function calculateResult() {
    let display = document.getElementById('display').value;
    try {
        display = display.replace('^', '**');
        display = display.replace('sqrt', 'Math.sqrt');
        display = display.replace('log', 'Math.log10');
        display = display.replace('sin', 'Math.sin');
        display = display.replace('cos', 'Math.cos');
        display = display.replace('tan', 'Math.tan');
        document.getElementById('display').value = eval(display);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
