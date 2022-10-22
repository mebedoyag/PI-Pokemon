import { connect } from "react-redux";
import { 
  getPokemonDetail, 
  resetPokemonDetail, 
} from '../actions/index';

import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from './Detail.module.css';

function Detail(props) {
  let params = useParams();
  const { 
    getPokemonDetail, 
    resetPokemonDetail, 
    pokemon
  } = props;
  
  useEffect(() => {
    getPokemonDetail(params.id);
  }, []);

  useEffect(() => {
    return () => {
      resetPokemonDetail();
    };
  }, []);

  const pokeDetail = (
    <>
    <h1>{pokemon.name}</h1>
    <div className={s.wrapper}>
      <div>
        <img 
          src={pokemon.imgUrl} 
          height={400} 
          width={400} 
          alt="poke details" 
        />
      </div>
      <div>
        {/* {pokemon.types.map(type => <p>Type: {type}</p>)} */}
        <p>Types: {pokemon.types}</p>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Life: {10}</p>  
        <p>Attack: {10}</p>  
        <p>Defense: {10}</p>  
        <p>Speed: {10}</p>         
      </div>
    </div>
    </>
  );

  return (
    <div className={s.container}>
      {props.loading 
        ? <h1>Loading...</h1>
        : pokeDetail}
    </div>
    
  );
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemonDetail,
    loading: state.loading,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemonDetail: id => dispatch(getPokemonDetail(id)),
    resetPokemonDetail: () => dispatch(resetPokemonDetail()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);