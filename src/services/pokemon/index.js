import axios from "axios";

async function getPokemonSpecie(id){
  const species = await axios.get(`https://pokeapi.co/api/v2/${id}`)
  return species
}