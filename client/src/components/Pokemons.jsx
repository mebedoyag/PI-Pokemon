import Pokemon from './Pokemon';
// import { bulbasaur } from '../pokeData';
import pokemons from '../pokeData';

function Pokemons() {
  return (
    <div>
      <h1>Pokemons</h1>
      {
        pokemons.map((poke, index) => <Pokemon name={poke.name} type={poke.typeNames[0]} image={poke.imgUrl} key={index + 1} />)
      }
      {/* <Pokemon name={bulbasaur.name} type={bulbasaur.typeNames[0]} image={bulbasaur.imgUrl} />  */}
    </div>
  );
}

export default Pokemons;