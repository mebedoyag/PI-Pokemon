import './App.css';

import { 
  Route, 
  Switch, 
  BrowserRouter } from 'react-router-dom';

import Landing from './components/Landing'; 
import Pokemons from './components/Pokemons';
import Detail from './components/Detail';
import Creation from './components/Creation';

function App() {
  return (
    <div className="big">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/home">
            <Pokemons />
          </Route>
          <Route path="/detail/:id">
            <Detail />
          </Route>
          <Route path="/creation">
            <Creation />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
