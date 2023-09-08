import { useState,useEffect } from 'react'
import './App.css'

function App() {

  const [pokemon, setPokemon] = useState([])
  
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(response => response.json())
      .then(allPokemons => console.log(allPokemons))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <h1>Atrapalos a todos</h1>
    </>
  )
}

export default App
