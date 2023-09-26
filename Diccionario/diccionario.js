document.addEventListener("DOMContentLoaded", function () {
    var wordList = document.getElementById("wordList");
    var searchInput = document.getElementById("searchInput");
    var showDefinitionButton = document.getElementById("showDefinitionButton");
    var definitionText = document.getElementById("definition");

    // Definir el diccionario con palabras y definiciones
    var dictionary = {
        'Aerobic': 'Técnica gimnástica acompañada de música y basada en el control del ritmo respiratorio.',
        'Ajedrez': 'Juego de mesa entre dos personas que se practica sobre un damero en el que se disponen las 16 piezas de cada jugador, desiguales en importancia y valor, que se desplazan y comen las del contrario según ciertas reglas.',
        'Atletismo': 'Conjunto de actividades y normas deportivas que comprenden las pruebas de velocidad, saltos y lanzamiento.',
        'Balonmano': 'Juego entre dos equipos de siete jugadores cada uno, cuyo objetivo es introducir el balón en la portería contraria impulsándolo con las manos.',
        'Ciclismo': 'Deporte que se practica montando en bicicleta.',
        'Equitación': 'Arte de montar y manejar bien el caballo.',
        'Fútbol': 'Juego entre dos equipos de once jugadores cada uno, cuyo objetivo es hacer entrar en la portería contraria un balón que no puede ser tocado con las manos ni con los brazos, salvo por el portero en su área de meta',
        'Judo': 'es un deporte en el que se ve involucrado todo el cuerpo y cuya intensidad y demanda cardiovascular pueden ser modulados perfectamente por el deportista.',
        'Natación': 'Definición de natación Del latín natatio, la nataciónes la acción y efecto de nadar.',
        'Tenis': 'Juego entre dos personas o dos parejas, en que los jugadores, a ambos lados de la red, se lanzan con raquetas una pelota con el propósito de que la otra parte no acierte a devolverla.',
        'Patinaje': 'Definición de Patinaje Patinaje es lo que hace la gente que patina.'
    };

    // Cargar las palabras en el cuadro de lista
    for (var word in dictionary) {
        wordList.options[wordList.options.length] = new Option(word);
    }

    // Función para mostrar la definición al hacer doble clic en una palabra
    wordList.addEventListener("dblclick", function () {
        var selectedWord = wordList.value;
        var definition = dictionary[selectedWord];

        if (definition) {
            definitionText.textContent = definition;
        } else {
            definitionText.textContent = "No se encontró una definición para esta palabra.";
        }
    });

    showDefinitionButton.addEventListener("click", function () {
        var selectedWord = wordList.value;
        var definition = dictionary[selectedWord];

        if (definition) {
            definitionText.textContent = definition;
        } else {
            definitionText.textContent = "No se encontró una definición para esta palabra.";
        }
    });

    searchInput.addEventListener("keyup", function () {
        var searchText = searchInput.value.trim().toLowerCase();

        wordList.options.length = 0; // Limpiar la lista

        if (searchText === "") {
            for (var word in dictionary) {
                wordList.options[wordList.options.length] = new Option(word);
            }
        } else {
            for (var word in dictionary) {
                if (word.toLowerCase().includes(searchText)) {
                    wordList.options[wordList.options.length] = new Option(word);
                }
            }
        }
    });
});

