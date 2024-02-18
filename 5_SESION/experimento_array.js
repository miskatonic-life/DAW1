function combinaciones() {
    let nombres = [
        "Bartolo", "Cirilo", "Fulgencio", "Anacleto", "Eustaquio",
        "Teófilo", "Amancio", "Hipólito", "Gervasio", "Prudencio",
        "Rodolfo", "Bonifacio", "Simplicio", "Evaristo", "Pancracio",
        "Gertrudis", "Leocadio", "Epifanio", "Aureliano", "Casimiro",
        "Doroteo", "Egidio", "Florencio", "Gregorio", "Hermenegildo",
        "Ildefonso", "Jeremías", "Lamberto", "Máximo", "Nicanor",
        "Ovidio", "Polibio", "Quintiliano", "Remigio", "Salustiano",
        "Timoteo", "Urbano", "Venancio", "Wilfredo", "Xilberto",
        "Yago", "Zenón", "Aquiles", "Basilio", "Cleofás",
        "Demetrio", "Ernesto", "Faustino", "Gumersindo", "Hilario","Pepita", "Fifí", "Candelaria", "Encarnación", "Griselda",
        "Hipólita", "Jovita", "Kitty", "Ludmila", "Milagros",
        "Ninfa", "Olimpia", "Prudencia", "Querubina", "Rocío",
        "Socorro", "Tulipán", "Úrsula", "Veneranda", "Wendolina",
        "Xochitl", "Yolanda", "Zulema", "Amapola", "Brisa",
        "Clotilde", "Dámaris", "Esperanza", "Florinda", "Gardenia",
        "Honoria", "Inocencia", "Jacaranda", "Keila", "Leticia",
        "Margarita", "Nereida", "Ofelia", "Paloma", "Quintina",
        "Rosario", "Sirena", "Tatiana", "Urania", "Violeta",
        "Wilma", "Ximena", "Yessenia", "Zahara", "Alondra"
    ];
    
    let apellidos = [
        "Zambomba", "Cacahuete", "Pantorrilla", "Piruleta", "Baticao",
        "Trompeta", "Bufanda", "Caleidoscopio", "Papaya", "Zarigüeya",
        "Gorgorito", "Chirimbolo", "Tarantela", "Cacofonía", "Bambú",
        "Melifluo", "Carambola", "Fandango", "Harapos", "Alboroto",
        "Birlibirloque", "Cataplasma", "Enguantado", "Filibustero", "Gazpacho",
        "Hipopótamo", "Intríngulis", "Jolgorio", "Kermés", "Lampiño",
        "Mandarria", "Nenúfar", "Oropel", "Petimetre", "Quimera",
        "Retorcido", "Sinsonte", "Tutú", "Ukelele", "Vodevil",
        "Wéstern", "Xilófono", "Yeguada", "Zarzuela", "Abuhardillado",
        "Borborigmo", "Cuplé", "Despabilado", "Espeleología", "Flamenco","Zarzuela", "Botijo", "Carrascal", "Abarca", "Barrueco",
        "Cachopo", "Fuentecilla", "Gañán", "Herrero", "Jabalera",
        "Lavanda", "Mazariegos", "Najarro", "Ovejero", "Pajares",
        "Quintero", "Robledillo", "Serrano", "Tormo", "Uceda",
        "Valdés", "Acebo", "Bravo", "Castañar", "Duruelo",
        "Encina", "Fañana", "Garganta", "Hinojal", "Jaroso",
        "Ladera", "Mondéjar", "Navazuelo", "Olmeda", "Pinar",
        "Quejigo", "Riachuelo", "Solana", "Tejera", "Ulloa",
        "Vega", "Zahúrda", "Alcornoque", "Barranco", "Cigüeña",
        "Duero", "Esteva", "Fraguas", "Guadiana", "Hoz"
    ];

    let apodos = [
        "El Rayo de Sevilla", "La Pantera de Zaragoza", "El Lince de Valencia",
        "El Tigre de Toledo", "La Tormenta de Tarragona", "El Huracán de Huelva",
        "La Joya de Jerez", "El Águila de Ávila", "La Cebra de Cuenca", "El León de León",
        "El Mago de Málaga", "La Estrella de Estepa", "El Lobo de Logroño",
        "La Sirena de Santander", "El Cometa de Cádiz", "La Flecha de Ferrol",
        "El Caballero de Córdoba", "La Perla de Palencia", "El Viento de Vigo",
        "La Llama de Lugo", "El Toro de Teruel", "La Gacela de Granada",
        "El Fantasma de Fuenlabrada", "La Rosa de Ronda", "El Zorro de Zamora",
        "La Garza de Gijón", "El Puma de Pamplona", "La Mariposa de Murcia",
        "El Halcon de Huesca", "La Ola de Oviedo", "El Coloso de Cáceres",
        "La Chispa de Chiclana", "El Dragón de Dos Hermanas", "La Brisa de Bilbao",
        "El Relámpago de Reus", "La Quimera de Quintanar", "El Titán de Tenerife",
        "La Dama de Denia", "El Centella de Ceuta", "La Niebla de Narón",
        "El Correcaminos de Cáceres", "La Orquídea de Orense", "El Pícaro de Puertollano",
        "La Hechicera de Huesca", "El Duende de Durango", "La Tempestad de Tui",
        "El Jinete de Jávea", "La Ilusión de Ibiza", "El Nómada de Navarra",
        "La Furia de Figueres","El Zorro de Zaragoza", "La Sardina de Santander", "El Búho de Burgos",
        "La Gaviota de Girona", "El Ciervo de Cuenca", "La Nutria de Navarra",
        "El Lince de León", "La Cigüeña de Cáceres", "El Águila de Ávila",
        "La Paloma de Pamplona", "El Gorrión de Granada", "La Mariposa de Málaga",
        "El Camaleón de Cádiz", "La Tortuga de Toledo", "El Delfín de Denia",
        "La Liebre de Lleida", "El Oso de Orense", "La Cigarra de Ciudad Real",
        "El Caracol de Castellón", "La Abeja de Albacete", "El Perro de Pontevedra",
        "La Gallina de Guadalajara", "El Gallo de Gerona", "La Oveja de Oviedo",
        "El Caballo de Huesca", "La Vaca de Valladolid", "El Burro de Badajoz",
        "La Cabra de Córdoba", "El Cerdo de Palencia", "La Rana de Ronda",
        "El Sapo de Soria", "La Hormiga de Huelva", "El Zorrillo de Zamora",
        "La Ardilla de Asturias", "El Conejo de Jaén", "La Langosta de Logroño",
        "El Cangrejo de Cantabria", "La Mosca de Murcia", "El Escarabajo de Eibar",
        "La Pulga de Palma", "El Ratón de Reus", "La Comadreja de Compostela",
        "El Mapache de Madrid", "La Garza del Guadalquivir", "El Búfalo de Bilbao",
        "La Iguana de Ibiza", "El Pavo de Parla", "La Salamandra de Salamanca",
        "El Dragón de Durango", "La Estrella de Estepa","El Cometa de Cádiz", "La Nebulosa de Navarra", "El Átomo de Ávila",
        "La Estrella de Estepa", "El Meteorito de Murcia", "La Galaxia de Gijón",
        "El Cohete de Córdoba", "La Luna de Lugo", "El Planeta de Palencia",
        "La Aurora de Almería", "El Telescopio de Toledo", "La Constelación de Cuenca",
        "El Satélite de Salamanca", "La Llamarada de León", "El Espacio de Eibar",
        "La Órbita de Oviedo", "El Astro de Asturias", "La Supernova de Sevilla",
        "El Cuásar de Cáceres", "La Vía Láctea de Vitoria", "El Pulso de Pontevedra",
        "La Onda de Orense", "El Eclipse de Elche", "La Luz de Lleida",
        "El Cosmos de Castellón", "La Partícula de Pamplona", "El Universo de Úbeda",
        "La Lente de Linares", "El Observatorio de Osuna", "La Gravedad de Granada",
        "El Agujero Negro de Alicante", "La Radiación de Ronda", "El Sol de Soria",
        "La Física de Fuenlabrada", "El Rayo de Rota", "La Energía de Ejea",
        "El Plasma de Plasencia", "La Materia Oscura de Málaga", "El Fotón de Ferrol",
        "La Singularidad de Segovia", "El Tiempo de Tarragona", "La Dimensión de Dénia",
        "El Quark de Quintanar", "La Velocidad de Valladolid", "El Campo de Cuenca",
        "La Frecuencia de Fuengirola", "El Magnetismo de Madrid", "La Antena de Antequera",
        "El Big Bang de Burgos", "La Relatividad de Reus"
    ];

    while (nombres.length > 0 && apellidos.length > 0 && apodos.length) {
        let impresionNombres = document.getElementById('personajes');
        let impresionApodos = document.getElementById('apodos');
        // Selecciona y elimina un nombre aleatorio de la lista de nombres
        let indiceNombreAleatorio = Math.floor(Math.random() * nombres.length);
        let nombreAleatorio = nombres.splice(indiceNombreAleatorio, 1)[0];

        // Selecciona y elimina un apellido aleatorio de la lista de apellidos
        let indiceApellidoAleatorio = Math.floor(Math.random() * apellidos.length);
        let apellidoAleatorio = apellidos.splice(indiceApellidoAleatorio, 1)[0];

        // lo mismo pero con el apodo
        let indiceApodoAleatorio = Math.floor(Math.random() * apodos.length);
        let apodoAleatorio = apodos.splice(indiceApodoAleatorio, 1)[0];


        // Combina el nombre y el apellido y escribe el resultado
        impresionNombres.innerHTML = (nombreAleatorio + ' ' + apellidoAleatorio + '<br>');
        impresionApodos.innerHTML = (apodoAleatorio);
    }
}