

export default function PokemonCard({ pokemon}) {
  return (
    <>
        <div className="pokemon-card">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h2>{pokemon.name}</h2>
        <div className="types">
        <h3>Tipo(s):</h3>
        <ul>
            {pokemon.types.map((type, index) => (
            <li key={index}>{type.type.name}</li>
            ))}
        </ul>
        </div>
        <div className="abilities">
        <h3>Habilidades:</h3>
        <ul>
            {pokemon.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
            ))}
        </ul>
        </div>
    </div>
  </>
  )
}
