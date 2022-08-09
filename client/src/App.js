// import './App.css';

import Landing from './components/Landing'; 
import NavBar from './components/NavBar';
import Pokemons from './components/Pokemons';
import Detail from './components/Detail';
import Creation from './components/Creation';

function App() {
  return (
    <div>
      <Landing />  
      <NavBar /> 
      <Pokemons />
      <Detail />
      <Creation />
    </div>
  );
}

export default App;
