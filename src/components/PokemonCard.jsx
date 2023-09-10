import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'

export default function PokemonCard() {

  const [pokemones, setPokemon] = useState([])
  
    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then(response => response.json())
        .then(allPokemons => allPokemons.results.map(pokemon => {
          fetch(pokemon.url)
            .then(response => response.json())
            .then(pokemon => setPokemon(pokemones => [...pokemones, pokemon]))
        }))
        .catch(error => console.log(error))
    }, [])

  const { id } = useParams();
  const pokemon = pokemones[id - 1]; // Resta 1 para obtener el índice correcto

  if (!pokemon) {
    return <div>No se encontró el Pokémon.</div>;
  }

  return (
    <div className="detalle">
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
    </div>
  );
}
