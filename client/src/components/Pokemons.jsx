import Pokemon from './Pokemon';
import PokeSearch from './PokeSearch';
import Filter from './Filter';
import { connect } from 'react-redux';
import { useState } from 'react';

function Pokemons(props) {
  const [page, setPage] = useState(0);
  const pokeNumber = 12;
  const handleClick = () => {
    page < 3 ? setPage(page + 1) : setPage(0);
  }

  return (
    <div>
      <h1>Pokemons</h1>
      <PokeSearch />
      <Filter page={page} />
      <button onClick={() => page ? setPage(page - 1) : null}>Previous</button>
      <button onClick={handleClick}>Next</button>
      <span>Current page {page + 1}</span>
      {
        props.pokemons.slice(page * pokeNumber, (page + 1) * pokeNumber).map((poke, index) => <Pokemon name={poke.name} type={poke.typeNames} image={poke.imgUrl} key={index + 1} id={poke.id} />)
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemonsLoaded,
    currentPokes: state.currentPokemons,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemons);