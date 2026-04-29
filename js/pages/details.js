import { fetchPokemon } from '../api.js';
import { Pokemon } from '../models/pokemon.js';

let query = new URLSearchParams(window.location.search);
let id = query.get('id');

async function cargar() {
    let datos = await fetchPokemon(id);
    let p = new Pokemon(datos);

    document.getElementById('pkmDetailName').textContent = p.getFormattedName();
    document.getElementById('pkmDetailImg').src = p.image;

    // Pintar tipos uno a uno
    let zonaTipos = document.getElementById('pkmDetailTypes');
    for (let t of p.types) {
        zonaTipos.innerHTML += '<span class="type ' + t + '">' + t + '</span>';
    }

    // Pintar stats de forma simple
    let lista = document.getElementById('statsList');
    for (let s of datos.stats) {
        lista.innerHTML += '<p>' + s.stat.name + ': ' + s.base_stat + '</p>';
    }
}
cargar();