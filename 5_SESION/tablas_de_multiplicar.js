function multiplicar(){
    //OBTENEMOS EL NUMERO DE ELEMENTOTEXTOTABLA
    let elementoTextoTabla = document.getElementById('textoTabla');
    let textoNumeroTabla = elementoTextoTabla.value;
    let numeroTabla = Number(textoNumeroTabla);

    //OBTENEMOS LA TABLA DENTRO DEL <UL>
    elementoTablaMultiplicar = document.getElementById('listaTabla');

    //REPRODUCIMOS Y MOSTRAMOS EL RESULTADO

    for(x=1; x<=10; x++){
        //CALCULAMOS EL RESULTADO
        let numeroResultado = numeroTabla * x;

        //LO GUARDAMOS Y PREPARAMOS PANTALLA
        let textoResultado = numeroTabla + ' por ' + x + ' es igual a ' + numeroResultado;

        //CREAMOS EL ELEMENTO DE LA LISTA
        let itemLista = document.createElement('li');
        itemLista.innerText = textoResultado;
        elementoTablaMultiplicar.appendChild(itemLista);
    }
}