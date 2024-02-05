function consultaPrecio(){

    let elementoRespuesta = document.getElementById('precio');
    let elementoViscera = document.getElementById('numeroViscera');
    let viscera = elementoViscera.value;

    switch (viscera)

    {
        case '1':
            elementoRespuesta.textContent = '45 €';
            break;
        
        case '2':
                elementoRespuesta.textContent = '300 €';
                break;
        
        case '3':
                elementoRespuesta.textContent = '7.500 €';
                break;

        case '4':
                elementoRespuesta.textContent = '20 €';
                 break;
            
        case '5':
                elementoRespuesta.textContent = 'FREE!!!';
                 break;

        case '6':
                elementoRespuesta.textContent = 'FREE!!!';
                 break;

        case '7':
                elementoRespuesta.textContent = 'FREE!!!';
                 break;

        case '8':
                elementoRespuesta.textContent = '30 cts';
                 break;
    }

}