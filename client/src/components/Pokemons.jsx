import Pokemon from './Pokemon';
import Inputs from './Inputs';
import { changePage } from '../actions/index';
import s from './Pokemons.module.css';
import { connect } from 'react-redux';
import { useLocation } from "react-router-dom";

function Pokemons(props) {
  const pokeNumber = 10;
  const { page, pokemons, changePage } = props;
  const startPos = page * pokeNumber;
  const endPos = (page + 1) * pokeNumber;

  const location = useLocation();
  let totalPokes = 0;
  
  const getPokemons = () => {
    let filterObj = {};
  
    if (location.search) {
      filterObj = location.search
        .slice(1)
        .split("&")
        .map(str => str.split("="))
        .reduce((result, pair) => {
          result[pair[0]] = pair[1];
          return result;
        }, {});
    }

    if (filterObj.type === "filter") {
      let pokeFiltered = [];

      if (filterObj.option === "existing") {
        pokeFiltered = pokemons
          .filter(poke => {
            return !isNaN(Number(poke.id));
          });
      } else if (filterObj.option === "created") {
        pokeFiltered = pokemons
          .filter(poke => {
            return isNaN(Number(poke.id));
          });
      } else {
        pokeFiltered = pokemons
          .filter(poke => {
            return poke
              .typeNames
              .includes(filterObj.option);
          });
      } 
      totalPokes = pokeFiltered.length;
      return pokeFiltered.slice(startPos, endPos);
    }

    if (filterObj.type === "order") {
      let pokeOrdered = [];

      if (filterObj.option === "asc") {
        pokeOrdered = pokemons
          .sort((a, b) => {
            const nameA = a.name;
            const nameB = b.name;
            
            if (nameA < nameB) return -1;
            if (nameA > nameB) return 1;
            return 0;
          });
      } else {
        pokeOrdered = pokemons
          .sort((a, b) => {
            const nameA = a.name;
            const nameB = b.name;
            
            if (nameA < nameB) return 1;
            if (nameA > nameB) return -1;
            return 0;
          });
      }
      totalPokes = pokeOrdered.length;
      return pokeOrdered.slice(startPos, endPos);
    }
    totalPokes = pokemons.length;
    return pokemons.slice(startPos, endPos)
  };

  const currentPoke = getPokemons();
  const pages = Math.ceil(totalPokes / pokeNumber);

  return (
    <>
      <Inputs />
      <div className={s.container}>
        <div className={s.pagination}>
          <button 
            className={s.bttn} 
            onClick={() => page ? changePage(page - 1) 
                          : null}
          >
            Previous
          </button>
          <span className={s.page}>{page + 1}</span>
          <button 
            className={s.bttn} 
            onClick={() => page < pages - 1 ? changePage(page + 1) 
                          : changePage(0)}
          >
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
      </div>
    </>
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