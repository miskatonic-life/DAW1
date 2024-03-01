// PASO 1 - DECLARAMOS LAS VARIABLES GLOBALES
var canvas, ctx, FPS = 60, tileMap = [], escenario;

// PASO 2 - MATRIZ DEL ESCENARIO
var escenario = [
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
    [2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,6],
    [2,9,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,13,6],
    [2,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,6],
    [2,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,6],
    [2,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,6],
    [2,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,6],
    [2,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,6],
    [2,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,6],
    [2,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,6],
    [2,10,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14,6],
    [2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
    [8,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,7]
]

// PASO 3 - DIBUJAMOS NUESTRO ESCENARIO

function dibujarEscenario() {
    for (let y = 0; y < 13; y++) {
        for (let x = 0; x < 21; x++) {
            var tile = escenario[y][x];

            switch (tile) {
                case 0:  
                    ctx.drawImage(tileMap[0], x * 64, y * 64);
                    break;
                case 1:  
                    ctx.drawImage(tileMap[1], x * 64, y * 64);
                    break;
                case 2:  
                    ctx.drawImage(tileMap[2], x * 64, y * 64);
                    break;
                case 3:  
                    ctx.drawImage(tileMap[3], x * 64, y * 64);
                    break;
                case 4:  
                    ctx.drawImage(tileMap[4], x * 64, y * 64);
                    break;
                case 5:  
                    ctx.drawImage(tileMap[5], x * 64, y * 64);
                    break;
                case 6:  
                    ctx.drawImage(tileMap[6], x * 64, y * 64);
                    break;
                case 7:  
                    ctx.drawImage(tileMap[7], x * 64, y * 64);
                    break;
                case 8:  
                    ctx.drawImage(tileMap[8], x * 64, y * 64);
                    break;
                case 9:  
                    ctx.drawImage(tileMap[9], x * 64, y * 64);
                    break;
                case 10:  
                    ctx.drawImage(tileMap[10], x * 64, y * 64);
                    break;
                case 11:  
                    ctx.drawImage(tileMap[11], x * 64, y * 64);
                    break;
                case 12:  
                    ctx.drawImage(tileMap[12], x * 64, y * 64);
                    break;
                case 13:  
                    ctx.drawImage(tileMap[13], x * 64, y * 64);
                    break;
                case 14:  
                    ctx.drawImage(tileMap[14], x * 64, y * 64);
                    break;
            }
        }
    }
}

// PASO 4 - CARGAMOS LAS IMÁGENES DE NUESTRO ESCENARIO Y SI ESTAN TODAS CARGADAS LLAMAMOS A LA FUNCION
// DIBUJAR ESCENARIO

function cargarTiles() {
    const tileSources = [
        'img/tile-1.png', 'img/tile-2.png', 'img/tile-3.png', 'img/tile-4.png',
        'img/tile-5.png', 'img/tile-6.png', 'img/tile-7.png', 'img/tile-8.png',
        'img/tile-9.png', 'img/ground-1.png', 'img/ground-2.png', 'img/ground-3.png',
        'img/ground-4.png', 'img/ground-5.png', 'img/ground-6.png'
    ];   

// ¡¡¡ ATENCION A ESTA FUNCION!!!

    let cargadas = 0;
    tileSources.forEach((src, index) => {
        tileMap[index] = new Image();
        tileMap[index].src = src;
        tileMap[index].onload = () => {
            cargadas++;
            if (cargadas === tileSources.length) {
                dibujarEscenario();
            }
        };
    });
}

let personaje = {
    x: 50,
    y: 200,
    velocidad: 10, // frames por segundo?
    imagen: new Image(),
    width: 192, // Ancho de cada frame de la animación
    height: 192, // Alto de cada frame de la animación
    frameIndex: 0, // Índice del frame actual, donde tiene inicio en la imagen
    tickCount: 0, // Contador para controlar la velocidad de la animación
    ticksPerFrame: 10, // Cuántos ticks pasan antes de pasar al siguiente frame
    numFrames: 6 // Total de frames en tu animación (imagen)
};

function cargarPersonaje() {
    personaje.imagen.src = 'img/Warrior_Red.png';
}


function actualizarEscenario() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarEscenario();


// DIBUJAMOS EL PERSONAJE 
ctx.drawImage(
    personaje.imagen,
    personaje.frameIndex * personaje.width, 0,
    personaje.width, personaje.height,
    personaje.x, personaje.y,
    personaje.width, personaje.height,
);
console.log(personaje.x, personaje.y);
}

function moverPersonaje(evento) {
    switch(evento.keyCode) {
        case 37: // Tecla de flecha izquierda
            personaje.x -= personaje.velocidad;
            break;
        case 38: // Tecla de flecha arriba
            personaje.y -= personaje.velocidad;
            break;
        case 39: // Tecla de flecha derecha
            personaje.x += personaje.velocidad;
            break;
        case 40: // Tecla de flecha abajo
            personaje.y += personaje.velocidad;
            break;
    }
    // ¡COLISIONES CON EL FINAL DE CANVAS! //////////////

    if(personaje.x <= 0){
        personaje.x = 0;}

    if(personaje.x >= 1100){
        personaje.x = 1100;}

    if(personaje.y >= 565){
        personaje.y = 565;}
    
    if(personaje.y <= 20){
        personaje.y = 20;}
}

function configurarControles() {
    window.addEventListener('keydown', moverPersonaje);
}

function cicloPrincipal() {
    actualizarEscenario();
    requestAnimationFrame(cicloPrincipal);
}

// TENEIS QUE ENTENDERLA !!!!

function iniciar() {
    canvas = document.getElementById("canvas");
    if (!canvas) {
        console.error('¡No se ha cargado el canvas!');
        return;
    }
    ctx = canvas.getContext('2d');
    cargarTiles(); // LLAMAMOS A CARGARTILES PARA LAS IMÁGENES
    cargarPersonaje(); // Asegúrate de que esta función no necesite esperar a que la imagen se cargue
    configurarControles();
    requestAnimationFrame(cicloPrincipal);
}




