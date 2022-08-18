import { connect } from "react-redux";
import { getPokemonDetail, resetPokemonDetail } from '../actions/index';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './Detail.module.css';

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
    <div className={s.container}>
      <h1>{props.pokemon.name}</h1>
      <div className={s.wrapper}>
        <div>
          <img src={props.pokemon.imgUrl} height={400} width={400} alt="poke details" />
        </div>
        <div>
          <p>Types: {props.pokemon.typeNames}</p>
          <p>Height: {props.pokemon.height}</p>
          <p>Weight: {props.pokemon.weight}</p>
          <p>Life: {props.pokemon.life}</p>  
          <p>Attack: {props.pokemon.attack}</p>  
          <p>Defense: {props.pokemon.defense}</p>  
          <p>Speed: {props.pokemon.speed}</p>         
        </div>
      </div>
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