function calculate() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var operacion = document.getElementById("operation").value;
    var resultado;

    if (operacion == "+") {
        resultado = num1 + num2;
    } 
    else if (operacion == "-") {
        resultado = num1 - num2;
    } 
    else if (operacion == "*") {
        resultado = num1 * num2;
    } 
    else if (operacion == "/") {
        resultado = num1 / num2;
    }

    document.getElementById("resultado").innerHTML =  resultado;
}