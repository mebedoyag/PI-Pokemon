// import './App.css';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Landing from './components/Landing'; 
import NavBar from './components/NavBar';
import Pokemons from './components/Pokemons';
import Detail from './components/Detail';
import Creation from './components/Creation';
import Filtered from './components/Filtered';
import Ordered from './components/Ordered';
import Inputs from './components/Inputs';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing />  
          </Route>
          <Route>
            <NavBar /> 
            <Switch>
              <Route path="/creation">
                <Creation />
              </Route>
              <Route path="/detail/:id">
                <Detail />
              </Route>
              <Route>
                <Inputs />
                <Route exact path="/home">
                  <Pokemons />
                </Route>
                <Route path="/detail">
                  <Detail />
                </Route>
                <Route path="/filter/:attribute">
                  <Filtered />
                </Route>
                <Route path="/order/:name">
                  <Ordered />
                </Route>
              </Route>
            </Switch>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
