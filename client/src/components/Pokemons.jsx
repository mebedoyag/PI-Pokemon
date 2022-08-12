import Pokemon from './Pokemon';
import PokeSearch from './PokeSearch';
// import { bulbasaur } from '../pokeData';
// import pokemons from '../pokeData';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

function Pokemons(props) {
  const [page, setPage] = useState(0);
  // const [currentPoke, setCurrentPoke] = useState([]);
  const pokeNumber = 12;
  // const pagesQty = Math.ceil(props.pokemons.length / pokeNumber); // IT DOESN'T WORKS, CHECK

  // useEffect(() => {
  //   setCurrentPoke(props.pokemons.slice(page * pokeNumber, (page + 1) * pokeNumber))
  // });

  return (
    <div>
      <h1>Pokemons</h1>
      <PokeSearch />
      <button onClick={() => page ? setPage(page - 1) : null}>Previous</button>
      <button onClick={() => page < 4 ? setPage(page + 1) : setPage(0)}>Next</button>
      <span>Current page {page + 1}</span>
      {
        props.pokemons.slice(page * pokeNumber, (page + 1) * pokeNumber).map((poke, index) => <Pokemon name={poke.name} type={poke.typeNames[0]} image={poke.imgUrl} key={index + 1} id={index + 1} />)
        // currentPoke.map((poke, index) => <Pokemon name={poke.name} type={poke.typeNames[0]} image={poke.imgUrl} key={index + 1} id={index + 1} />)
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