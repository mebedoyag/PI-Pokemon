import Pokemon from './Pokemon';
import Inputs from './Inputs';
import { changePage, toggleLoading } from '../actions/index';
import s from './Pokemons.module.css';
import { connect } from 'react-redux';
import { useLocation } from "react-router-dom";
import { 
  getFilterObj, 
  filterPokemons,
  orderPokemons } from '../utils';

function Pokemons(props) {
  const pokeNumber = 10;
  const { page, pokemons, changePage, loading } = props;
  const startPos = page * pokeNumber;
  const endPos = (page + 1) * pokeNumber;

  const location = useLocation();
  let totalPokes = 0;
  
  const getPokemons = () => {
    let filterObj = getFilterObj(location.search);

    if (filterObj.type === "filter") {
      let pokeFiltered = filterPokemons(filterObj.option, pokemons);
      totalPokes = pokeFiltered.length;
      return pokeFiltered.slice(startPos, endPos);
    }

    if (filterObj.type === "order") {

      let pokeOrdered = orderPokemons(filterObj.option, pokemons);
      totalPokes = pokeOrdered.length;
      return pokeOrdered.slice(startPos, endPos);
    }
    totalPokes = pokemons.length;
    return pokemons.slice(startPos, endPos)
  };

  const currentPoke = getPokemons();
  const pages = Math.ceil(totalPokes / pokeNumber);

  const containerElement = (
    <>
      <div className={s.pagination}>
        <button 
          className={s.bttn} 
          onClick={() => (
            page 
              ? changePage(page - 1) 
              : null)}>
          Previous
        </button>
        <span className={s.page}>{page + 1}</span>
        <button 
          className={s.bttn} 
          onClick={() => (
            page < pages - 1
              ? changePage(page + 1) 
              : changePage(0))}>
          Next
        </button>
      </div>
      <div className={s.wrapper}>
        {currentPoke.map((poke, index) => (
          <Pokemon 
            name={poke.name} 
            type={poke.typeNames} 
            image={poke.imgUrl} 
            key={index + 1} 
            id={poke.id} 
          />))}
      </div>
    </>
  );

  return (
    <>
      <Inputs />
      <div className={s.container}>
        {loading 
          ? <h1>Loading...</h1>
          : containerElement}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemonsLoaded,
    page: state.currentPage,
    loading: state.loading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (page) => dispatch(changePage(page)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemons);