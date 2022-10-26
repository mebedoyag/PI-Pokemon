import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from "react-router-dom";
import Pokemon from './Pokemon';
import Inputs from './Inputs';
import NavBar from './NavBar';
import s from './Pokemons.module.css'; 

import { 
  changePage, 
  restorePokemons,
  restoreTypes,
  showLoading,
} from '../actions/index';

import { 
  getFilterObj, 
  filterPokemons,
  orderPokemons 
} from '../utils';

function Pokemons(props) {
  const pokeNumber = 10;
  const { 
    page, 
    pokemons, 
    types,
    loading,
    changePage, 
    restorePokemons,
    restoreTypes,
    showLoading
  } = props;
  const startPos = page * pokeNumber;
  const endPos = (page + 1) * pokeNumber;

  useEffect(() => {
    const pokesSaved = localStorage.getItem('pokes');
    const typesSaved = localStorage.getItem('types');
    
    if (pokesSaved) {
      const p = JSON.parse(pokesSaved);
      restorePokemons(p);
      showLoading(false);
    }
    if (typesSaved) {
      const t = JSON.parse(typesSaved);
      restoreTypes(t);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pokes', JSON.stringify(pokemons));

  }, [pokemons]);

  useEffect(() => {
    localStorage.setItem('types', JSON.stringify(types));
  }, [types])

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
            type={poke.types} 
            image={poke.imgUrl} 
            key={index + 1} 
            id={poke.id} 
          />))}
      </div>
    </>
  );

  return (
    <>
      <NavBar />
      <Inputs />
      <div className={s.container}>
        {loading 
          ? <h1>Loading...</h1>
          : containerElement}
          {/* {containerElement} */}
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemonsLoaded,
    page: state.currentPage,
    loading: state.loading,
    types: state.types,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: (page) => dispatch(changePage(page)),
    restorePokemons: (pokes) => dispatch(restorePokemons(pokes)),
    showLoading: (b) => dispatch(showLoading(b)),
    restoreTypes: (t) => dispatch(restoreTypes(t))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemons);