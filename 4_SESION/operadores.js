function calcular(){
    let elementoRespuesta1 = document.getElementById('respuesta1');
    let elementoRespuesta2 = document.getElementById('respuesta2');
    let elementoRespuesta3 = document.getElementById('respuesta3');

    let elementoEdad = document.getElementById('textoEdad');
    let edad = elementoEdad.value;

    let puedeBeber = edad >= 18;
    elementoRespuesta1.textContent = puedeBeber;

    if(puedeBeber == true){
        elementoRespuesta1.innerHTML = ('puede ponerse hasta las cejas')
    } else {
        elementoRespuesta1.innerHTML = ('no puede todavía')
    }

    let puedeEntrar = edad >= 18 && edad <=30;
    elementoRespuesta2.textContent = puedeEntrar;

    if(puedeEntrar == true){
        elementoRespuesta2.innerHTML = ('¡venga! que pase!')
    } else {
        elementoRespuesta2.innerHTML = ('¡no puede pasar!')
    }

    let entraDeGorra = edad == 20 || edad == 25;
    elementoRespuesta3.textContent = entraDeGorra;

    if(entraDeGorra == true){
        elementoRespuesta3.innerHTML = ('entra de gorra')
    } else {
        elementoRespuesta3.innerHTML = ('tiene que amoquinar')
    }
}