import Pokemon from './Pokemon';
import PokeSearch from './PokeSearch';
import Filter from './Filter';
import { connect } from 'react-redux';
// import { useState } from 'react';

import { changePage } from '../actions/index';

function Pokemons(props) {
  const pokeNumber = 12;
  const { page, pokemons, changePage } = props;
  const currentPokemons = pokemons.slice(page * pokeNumber, (page + 1) * pokeNumber);
  // const [page, setPage] = useState(0);
  // const handleClick = () => {
  //   page < 3 ? setPage(page + 1) : setPage(0);
  // }

  return (
    <div>
      <h1>Pokemons</h1>
      <PokeSearch />
      <Filter page={page} />
      {/* <button onClick={() => page ? setPage(page - 1) : null}>Previous</button>
      <button onClick={handleClick}>Next</button>
      <span>Current page {page + 1}</span>
      {
        props.pokemons.slice(page * pokeNumber, (page + 1) * pokeNumber).map((poke, index) => <Pokemon name={poke.name} type={poke.typeNames} image={poke.imgUrl} key={index + 1} id={poke.id} />)
      } */}
      <button onClick={() => page ? changePage(page - 1) : null}>Previous</button>
      <button onClick={() => page < 3 ? changePage(page + 1) : changePage(0)}>Next</button>
      <span>Current page {page + 1}</span>
      {
        currentPokemons.map((poke, index) => <Pokemon name={poke.name} type={poke.typeNames} image={poke.imgUrl} key={index + 1} id={poke.id} />)
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemonsLoaded,
    page: state.currentPage
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (page) => dispatch(changePage(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemons);