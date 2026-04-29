import { storage } from '../storage.js';
import { Pokemon } from '../models/pokemon.js';

let enemyHp = 100;
let pkmEnemigo = null;

function iniciar() {
    let datos = storage.getBattleTarget();
    pkmEnemigo = new Pokemon(datos);

    document.getElementById('enemyName').textContent = pkmEnemigo.getFormattedName();
    document.getElementById('enemyImg').src = pkmEnemigo.image;
    document.getElementById('playerName').textContent = "Pikachu";
    document.getElementById('playerImg').src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png";
}

document.getElementById('attackBtn').onclick = function() {
    let daño = Math.floor(Math.random() * 20) + 10;
    enemyHp = enemyHp - daño;

    if (enemyHp < 0) { enemyHp = 0; }

    document.getElementById('enemyHpFill').style.width = enemyHp + "%";
    document.getElementById('battleLog').textContent = "¡Has hecho " + daño + " de daño!";

    if (enemyHp <= 0) {
        storage.saveToCollection(pkmEnemigo);
        window.location.href = "my_pokemons.html";
    }
};

iniciar();