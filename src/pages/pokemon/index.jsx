import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PokemonServices from "../../services/pokemon"

function Pokemon() {
  const { id } = useParams()

  const [species, setSpecies] = useState()

  const getSpecies = async () => (
    await PokemonServices.getPokemonSpecies(id)
      .then(sp => setSpecies(sp.data))
  )

  useEffect(() => {
    getSpecies()
  }, []);

  if (species)
    return (
      <>
        {species.name}
      </>
    )
}

export default Pokemon