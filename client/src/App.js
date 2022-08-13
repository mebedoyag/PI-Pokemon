// import './App.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Landing from './components/Landing'; 
import NavBar from './components/NavBar';
import Pokemons from './components/Pokemons';
import Detail from './components/Detail';
import Creation from './components/Creation';
import Filtered from './components/Filtered';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar /> 
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
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/creation">
            <Creation />
          </Route>
          <Route path="/filter/:attribute">
            <Filtered />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
