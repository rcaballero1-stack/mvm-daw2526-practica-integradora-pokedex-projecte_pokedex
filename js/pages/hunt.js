import { fetchPokemon } from '../api.js';
import { storage } from '../storage.js';

document.getElementById('huntButton').onclick = async function() {
    let idAzar = Math.floor(Math.random() * 151) + 1;
    let datos = await fetchPokemon(idAzar);

    let zona = document.getElementById('wildPokemonArea');
    zona.innerHTML = '<div><img src="' + datos.sprites.front_default + '" class="silhouette"><br><button id="btnLucha">¡LUCHAR!</button></div>';

    document.getElementById('btnLucha').onclick = function() {
        storage.setBattleTarget(datos);
        window.location.href = "battle.html";
    };
};