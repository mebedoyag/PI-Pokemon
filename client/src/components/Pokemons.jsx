import Pokemon from './Pokemon';
import { connect } from 'react-redux';
import { changePage } from '../actions/index';
import s from './Pokemons.module.css';

function Pokemons(props) {
  const pokeNumber = 10;
  const { page, pokemons, changePage } = props;

  const startPos = page * pokeNumber;
  const endPos = (page + 1) * pokeNumber;

  const currentPokemons = () => (
    pokemons.slice(startPos, endPos)
  );

  return (
    <div className={s.container}>
      <div className={s.pagination}>
        <button 
          className={s.bttn} 
          onClick={() => page ? changePage(page - 1) : null}
        >
          Previous
        </button>
        <span className={s.page}>{page + 1}</span>
        <button 
          className={s.bttn} 
          onClick={() => page < 3 ? changePage(page + 1) : changePage(0)}
        >
          Next
        </button>
      </div>
      <div className={s.wrapper}>
        {currentPokemons().map((poke, index) => (
          <Pokemon 
            name={poke.name} 
            type={poke.typeNames} 
            image={poke.imgUrl} 
            key={index + 1} 
            id={poke.id} 
          />))}
      </div>
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