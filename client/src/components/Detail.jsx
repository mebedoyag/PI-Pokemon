// import { bulbDetails } from '../pokeData';

import { connect } from "react-redux";
import { getPokemonDetail } from '../actions/index';

function Detail(props) {

  return (
    <div>
      <h1>Detail</h1>
      <div>
        <img src={props.pokemon.imgUrl} alt="poke details" />
      </div>
      <p>{props.pokemon.name}</p>
      <p>{props.pokemon.typeNames}</p>
      <p>{props.pokemon.height}</p>
      <p>{props.pokemon.weight}</p>       
    </div>
    
  );
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemonDetail
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemonDetail: id => dispatch(getPokemonDetail(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);