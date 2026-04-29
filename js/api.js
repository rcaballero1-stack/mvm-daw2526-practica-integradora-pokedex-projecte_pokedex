export async function fetchPokemonList() {
    let peticion = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    let datos = await peticion.json();
    return datos.results;
}

export async function fetchPokemon(id) {
    let peticion = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
    let datos = await peticion.json();
    return datos;
}