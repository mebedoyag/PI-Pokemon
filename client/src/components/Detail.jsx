import { connect } from "react-redux";
import { getPokemonDetail, resetPokemonDetail } from '../actions/index';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
  let params = useParams();
  const { getPokemonDetail, resetPokemonDetail } = props;
  
  useEffect(() => {
    // console.log('hellooo, I am in the detail at mounting cycle');
    // console.log('params id', params.id);
    getPokemonDetail(params.id);
  }, []);

  useEffect(() => {
    return () => resetPokemonDetail();
  }, []);

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
    getPokemonDetail: id => dispatch(getPokemonDetail(id)),
    resetPokemonDetail: () => dispatch(resetPokemonDetail())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);