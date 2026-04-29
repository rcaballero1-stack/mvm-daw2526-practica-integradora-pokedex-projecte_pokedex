import { fetchPokemonList, fetchPokemon } from './api.js';
import { Pokemon } from './models/pokemon.js';

// 1. Función principal que carga los Pokémon al abrir la página
async function inicio() {
    let lista = await fetchPokemonList();
    let grid = document.getElementById('mainPkmGrid');
    
    // Ponemos un mensaje de carga
    grid.innerHTML = "<h3>Cargando Pokémon...</h3>";

    // Recorremos los 151 nombres para pedir los detalles de cada uno
    for (let i = 0; i < lista.length; i++) {
        let datos = await fetchPokemon(lista[i].name);
        let p = new Pokemon(datos);
        
        // Creamos la "caja" de cada Pokémon
        let caja = document.createElement('div');
        caja.className = "pokemon-card";
        
        // MODIFICADO: Imagen + Nombre + Tipos (usando un bucle para los tipos)
        let contenido = '<img src="' + p.image + '"><h4>' + p.getFormattedName() + '</h4>';
        contenido += '<div class="card-types">';
        for (let j = 0; j < p.types.length; j++) {
            contenido += '<span class="type ' + p.types[j] + '">' + p.types[j] + '</span>';
        }
        contenido += '</div>';
        
        caja.innerHTML = contenido;
        
        // Al hacer clic, vamos a la página de detalles pasándole el ID por la URL
        caja.onclick = function() { 
            window.location.href = "details.html?id=" + p.id; 
        };
        
        grid.appendChild(caja);
    }

    // Al terminar de cargar, quitamos el mensaje de "Cargando"
    grid.querySelector('h3').remove();
}

// 2. Lógica del Buscador
document.getElementById('pkmSearchInput').oninput = function() {
    let texto = this.value.toLowerCase();
    let tarjetas = document.getElementsByClassName('pokemon-card');

    for (let i = 0; i < tarjetas.length; i++) {
        let nombre = tarjetas[i].textContent.toLowerCase();
        
        if (nombre.includes(texto)) {
            tarjetas[i].style.display = "block";
        } else {
            tarjetas[i].style.display = "none";
        }
    }
};

// Arrancamos el programa
inicio();