function mostrarResultado(resultado){
    document.getElementById('resultado').value = resultado;
    let muestraResultado = document.getElementById('resultado');
    muestraResultado.textContent = (resultado);
    
}

function sumar() {
    let numero1 = +document.getElementById('campo1').value;
    let numero2 = +document.getElementById('campo2').value;
    mostrarResultado(numero1 + numero2);
}

function restar() {
    let numero1 = +document.getElementById('campo1').value;
    let numero2 = +document.getElementById('campo2').value;
    mostrarResultado(numero1 - numero2);
}

function multiplicar() {
    let numero1 = +document.getElementById('campo1').value;
    let numero2 = +document.getElementById('campo2').value;
    mostrarResultado(numero1 * numero2);
}

function dividir() {
    let numero1 = +document.getElementById('campo1').value;
    let numero2 = +document.getElementById('campo2').value;
    mostrarResultado(numero1 / numero2);
}

function raiz() {
    let numero = +document.getElementById('campo2').value;
    mostrarResultado(Math.sqrt(numero));
}

function potencia() {
    let numero1 = +document.getElementById('campo1').value;
    let numero2 = +document.getElementById('campo2').value;
    mostrarResultado(Math.pow(numero1,numero2));
}

function random() {
    let minimo = +document.getElementById('campo1').value;
    let maximo = +document.getElementById('campo2').value;
    numero = maximo + 1;
    mostrarResultado (Math.floor(Math.random() * (maximo - minimo) +  minimo));
}

function round() {
    let numero = +document.getElementById('campo2').value;
    mostrarResultado(Math.round(numero));
}

function floor() {
    let numero = +document.getElementById('campo2').value;
    mostrarResultado(Math.floor(numero));
}

function ceil() {
    let numero = +document.getElementById('campo2').value;
    mostrarResultado(Math.ceil(numero));
}