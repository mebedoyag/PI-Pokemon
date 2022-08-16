import { connect } from "react-redux";
import { getPokemonDetail, resetPokemonDetail } from '../actions/index';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
  let params = useParams();
  const { getPokemonDetail, resetPokemonDetail } = props;
  
  useEffect(() => {
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
      <p>Name: {props.pokemon.name}</p>
      <p>Types: {props.pokemon.typeNames}</p>
      <p>Height: {props.pokemon.height}</p>
      <p>Weight: {props.pokemon.weight}</p>
      <p>Life: {props.pokemon.life}</p>  
      <p>Attack: {props.pokemon.attack}</p>  
      <p>Defense: {props.pokemon.defense}</p>  
      <p>Speed: {props.pokemon.speed}</p>         
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