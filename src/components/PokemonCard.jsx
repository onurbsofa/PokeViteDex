import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DetallePokemon() {
  const { id } = useParams(); // Obtén el ID del Pokémon desde la URL
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    // Realiza una solicitud para obtener los datos del Pokémon por su ID
    // Puedes usar una lista de Pokémon o una API para esto
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!pokemon) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalles de {pokemon.name}</h2>
      {/* Mostrar los detalles del Pokémon */}
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      {/* ... */}
    </div>
  );
}

export default DetallePokemon;

