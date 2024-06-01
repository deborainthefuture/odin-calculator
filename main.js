document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const numberButtons = document.querySelectorAll(".number");
    const operatorButtons = document.querySelectorAll(".operator");
    const deleteButton = document.querySelector(".delete");
    const acButton = document.querySelector(".all-clear");
    const equalsButton = document.querySelector(".equals");

    let num1 = null;
    let operator = null;
    let num2 = null;

    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            displayNumber(button.textContent);
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            setOperator(button.textContent);
        });
    });

    deleteButton.addEventListener('click', clearDisplay);
    equalsButton.addEventListener("click", () => calculate("="));
    acButton.addEventListener("click", allClear);

    function displayNumber(num) {
        if(display.textContent === '0') {
            display.textContent = num;
        } else {
            display.textContent += num;
        }
    }

    function clearDisplay() {
        display.textContent = '0';
    }

    function allClear() {
        display.textContent = '0';
        num1 = null;
        operator = null;
    }

    function setOperator(operador) {
        if(num1 === null) {
            num1 = parseFloat(display.textContent);
            operator = operador;
            display.textContent = '0';
        } else {
            calculate(operador);
        }
    }

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

    function calculate(op) { //  Esse 'op' é o argumento que será recebido a partir do clique no botão "=", passado na linha 26
        let result;

        if(operator && num1 !== null) {
            num2 = parseFloat(display.textContent);

            switch(operator) {
                case '+':
                    result = add(num1, num2);
                    display.textContent = result;
                    break;
                case '-':
                    result = subtract(num1, num2);
                    display.textContent = result;
                    break;
                case 'X':
                    result = multiply(num1, num2);
                    display.textContent = result;
                    break; 
                case '/':
                    result = divide(num1, num2);
                    display.textContent = result;
                    break;
            }
            num1 = parseFloat(display.textContent);
            op === "=" ? null : op;
        }
    }
});