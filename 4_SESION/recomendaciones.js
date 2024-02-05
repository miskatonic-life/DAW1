

function recomendar(genero)
{

let elementoPelicula = document.getElementById('pelicula');
let elementoEdad = document.getElementById('edad').value;

    switch (genero) 
    {
        case 'terror':
        elementoPelicula.textContent = ('terror');
            if (elementoEdad < 13) {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_1.png">');
            } else if (elementoEdad >= 13 && elementoEdad <= 16) {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_2.png">');
            } else {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_3.png">');
            }
        break;

     
        case 'historia':
            elementoPelicula.textContent = ('historia');
            if (elementoEdad < 13) {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_4.png">');
            } else if (elementoEdad >= 13 && elementoEdad <= 16) {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_5.png">');
            } else {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_6.png">');
            }
        break;

    
        case 'romantica':
            elementoPelicula.textContent = ('romantica');
            if (elementoEdad < 13) {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_7.png">');
            } else if (elementoEdad >= 13 && elementoEdad <= 16) {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_8.png">');
            } else {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_9.png">');
            }
        break;

     
        case 'SciFy':
            if (elementoEdad < 13) {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_10.png">');
            } else if (elementoEdad >= 13 && elementoEdad <= 16) {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_11.png">');
            } else {
                elementoPelicula.innerHTML = ('<img src="movies/pelicula_12.png">');
            }
        break;
    }
}