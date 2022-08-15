import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Pokemon from './Pokemon';

function Filtered(props) {
  let params = useParams();
  let att = params.attribute;
  let pokeFiltered = [];

  if (att === "existing") {
    pokeFiltered = props.pokemons.filter(poke => {
      return !isNaN( Number(poke.id) );
    });
  } else if (att === "created") {
    pokeFiltered = props.pokemons.filter(poke => {
      return isNaN( Number(poke.id) );
    });
  } else {
    pokeFiltered = props.pokemons.filter(poke => {
      return poke.typeNames.includes(params.attribute);
    });
  } 

  return (
    <div>
      <h1>Helloo</h1>
      {pokeFiltered.map((poke, index) => <Pokemon name={poke.name} type={poke.typeNames} image={poke.imgUrl} key={index + 1} id={poke.id} />)}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemonsLoaded,
    types: state.types
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filtered);