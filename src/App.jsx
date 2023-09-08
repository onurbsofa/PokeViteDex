import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListaPokemon from './components/PokeList'
import DetallePokemon from './components/PokemonCard'

function App() {


  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListaPokemon} />
        <Route path="/pokemon/:id" component={DetallePokemon} />
      </Switch>
    </Router>
  )
}

export default App
