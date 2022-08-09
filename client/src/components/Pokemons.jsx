import Pokemon from './Pokemon';
// import { bulbasaur } from '../pokeData';
// import pokemons from '../pokeData';
import { connect } from 'react-redux';

function Pokemons(props) {
  return (
    <div>
      <h1>Pokemons</h1>
      {
        props.pokemons.map((poke, index) => <Pokemon name={poke.name} type={poke.typeNames[0]} image={poke.imgUrl} key={index + 1} />)
      }
      {/* {
        pokemons.map((poke, index) => <Pokemon name={poke.name} type={poke.typeNames[0]} image={poke.imgUrl} key={index + 1} />)
      } */}
      {/* <Pokemon name={bulbasaur.name} type={bulbasaur.typeNames[0]} image={bulbasaur.imgUrl} />  */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemonsLoaded
  }
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemons);

// export default Pokemons;