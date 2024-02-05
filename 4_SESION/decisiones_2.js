function calcular(){
    let elementoDecision = document.getElementById('decision');
    let elementoPrecio = document.getElementById('precioLeche');
    let precio = elementoPrecio.value;

    if (precio < 5){
        elementoDecision.textContent = ('puede comprar 2 cartones de leche');
    } else {
        if(precio < 8){
            elementoDecision.textContent = ('puede comprar 1 cartones de leche');
        }
        else{
        elementoDecision.innerHTML = ('<h1>vete a comprar a otro sitio chaval!!!!!</h1>');
    }
    }
}