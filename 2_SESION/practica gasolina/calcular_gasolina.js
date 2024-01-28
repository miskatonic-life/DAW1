function calcularLitros(){
    var elementoKm = document.getElementById('textoKm');
    var textoKm = elementoKm.value;
    var cantKm = Number(textoKm);

    // var cantLitros = cantKm / 7.1;
    // cantLitros = Math.round(cantLitros);
    var cantLitros = cantKm / 7.1;
    cantLitros = cantLitros.toFixed(2);

    var resultado = document.getElementById('textoResultado');
    resultado.textContent = 'Tienes que poner ' + cantLitros + ' Litros de gasolina';
}