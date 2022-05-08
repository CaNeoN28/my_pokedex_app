import axios from "axios";

async function getPokemonSpecies(id){
  const species = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
  return species
}

const PokemonServices = {
  getPokemonSpecies,
}

export default PokemonServices