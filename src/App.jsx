import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ListaPokemon from './components/PokeList'
import DetallePokemon from './components/PokemonCard'

function App() {


  return (
    <Router>
      <Routes>
        <Route  path="/" element={<ListaPokemon />} />
        <Route path="/pokemon/:id" component={<DetallePokemon/>} />
      </Routes>
    </Router>
  )
}

export default App
