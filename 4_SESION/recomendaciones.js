

function recomendar(genero)
{

let elementoPelicula = document.getElementById('pelicula');
let elementoEdad = document.getElementById('edad').value;

    switch (genero) 
    {
        case 'terror':
        elementoPelicula.textContent = ('terror');
            if (elementoEdad < 13) {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_1.png" class="animate__animated animate__fadeInDown">');
            } else if (elementoEdad >= 13 && elementoEdad <= 16) {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_2.png" class="animate__animated animate__fadeInDown">');
            } else {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_3.png" class="animate__animated animate__fadeInDown">');
            }
        break;

     
        case 'historia':
            elementoPelicula.textContent = ('historia');
            if (elementoEdad < 13) {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_4.png" class="animate__animated animate__fadeInDown">');
            } else if (elementoEdad >= 13 && elementoEdad <= 16) {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_5.png" class="animate__animated animate__fadeInDown">');
            } else {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_6.png" class="animate__animated animate__fadeInDown">');
            }
        break;

    
        case 'romantica':
            elementoPelicula.textContent = ('romantica');
            if (elementoEdad < 13) {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_7.png" class="animate__animated animate__fadeInDown">');
            } else if (elementoEdad >= 13 && elementoEdad <= 16) {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_8.png" class="animate__animated animate__fadeInDown">');
            } else {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_9.png" class="animate__animated animate__fadeInDown">');
            }
        break;

     
        case 'SciFy':
            if (elementoEdad < 13) {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_10.png" class="animate__animated animate__fadeInDown">');
            } else if (elementoEdad >= 13 && elementoEdad <= 16) {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_11.png" class="animate__animated animate__fadeInDown">');
            } else {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_12.png" class="animate__animated animate__fadeInDown">');
            }
        break;
    }
}