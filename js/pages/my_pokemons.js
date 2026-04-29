import { storage } from '../storage.js';
import { Pokemon } from '../models/pokemon.js';

function mostrar() {
    let lista = storage.getCaptured();
    let grid = document.getElementById('capturedGrid');
    grid.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        let p = new Pokemon(lista[i]);
        grid.innerHTML += '<div class="pokemon-card"><img src="'+p.image+'"><h3>#'+p.id+'</h3><p>'+p.getFormattedName()+'</p></div>';
    }
    document.getElementById('pkmCount').textContent = lista.length;
}



mostrar();