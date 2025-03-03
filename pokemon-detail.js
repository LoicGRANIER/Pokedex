let currentPokemonId = null;

document.addEventListener("DOMContentLoaded", () => {
    const MAX_POKEMONS = 647;
    const PokemonId = new URLSearchParams(window.location.search).get('id');
    const id = parseInt(PokemonId, 10);

    if (id < 1 || id > MAX_POKEMONS) {
        return (window.location.search = "./index.html");

    }

    cuurrentPokemonId = id;
    loadPokemon(id);
})


async function loadPokemon(id) {
    try {
        const [pokemon, pokemonSpecies] = await Promise
            .all([fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json()

            ),
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) => res.json()

            ),
            ]);

            const abilitiesWrapper = document.querySelector(".pokemon-detail-wrap .pokemon-detail.move");
            abilitiesWrapper.innerHTML = "";

            if ( currentPokemonId === id)
        return true;
    }
    catch (error) {
        console.error("Une erreur durant la récupration de la data du Pokemon:", error);
        return false
    }

}