import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Pokemon from './Pokemon';
import s from './Pokemons.module.css';


function Filtered(props) {
  let params = useParams();
  let att = params.attribute;
  let pokeFiltered = [];

  const pokeNumber = 12;
  const currentPokemons = props.pokemons.slice(props.page * pokeNumber, (props.page + 1) * pokeNumber);

  if (att === "existing") {
    pokeFiltered = currentPokemons.filter(poke => {
      return !isNaN( Number(poke.id) );
    });
  } else if (att === "created") {
    pokeFiltered = currentPokemons.filter(poke => {
      return isNaN( Number(poke.id) );
    });
  } else {
    pokeFiltered = currentPokemons.filter(poke => {
      return poke.typeNames.includes(params.attribute);
    });
  } 

  return (
    <div>
      <h1>Helloo</h1>
      <div className={s.wrapper}>
        {pokeFiltered.map((poke, index) => <Pokemon name={poke.name} type={poke.typeNames} image={poke.imgUrl} key={index + 1} id={poke.id} />)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemonsLoaded,
    types: state.types,
    page: state.currentPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filtered);