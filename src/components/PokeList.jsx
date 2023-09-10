import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PokeList() {

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
  

    return (
      <div className="container">
        {pokemones.map((pokemon, index) => (
          <Link to={`/pokemon/${index + 1}`} key={index}>
            <div className="card" key={index}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <h3>{pokemon.name}</h3>
              <p>{pokemon.types[0].type.name}</p>
            </div>
          </Link>
        ))}
      </div>
    );
}
