function getPokemon(selectedPokemon) {
    // Get info about selected pokemon
    P.getPokemonByName(selectedPokemon.toLowerCase()).then(function(response) {
        console.log(response)
    })
}