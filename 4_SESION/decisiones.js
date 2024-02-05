function calcular(){
    let elementoDecision = document.getElementById('decision');
    let elementoPrecio = document.getElementById('precioLeche');
    let precio = elementoPrecio.value;

    if (precio <= 5){
        elementoDecision.textContent = ('puede comprar 2 cartones de leche');
    } else {
        elementoDecision.textContent = ('No puede comprar 2 cartones de leche');
    }
}