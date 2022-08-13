// import { bulbDetails } from '../pokeData';

import { connect } from "react-redux";
import { getPokemonDetail } from '../actions/index';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';

function Detail(props) {
  // let { id } = useParams();
  // console.log('id', id);

  // useEffect(() => {
  //   props.getPokemonDetail(id)
  // }, [])

  return (
    <div>
      <h1>Detail</h1>
      <div>
        <img src={props.pokemon.imgUrl} alt="poke details" />
      </div>
      <p>{props.pokemon.name}</p>
      <p>{props.pokemon.typeNames}</p>
      {/* <p>{props.pokemon.typeNames[0]}</p>  */}
      <p>{props.pokemon.height}</p>
      <p>{props.pokemon.weight}</p>       
      {/* <div>
        <img src={bulbDetails.imgUrl} alt="poke details" />
      </div>
      <p>{bulbDetails.name}</p>
      <p>{bulbDetails.typeNames[0]}</p>
      <p>{bulbDetails.height}</p>
      <p>{bulbDetails.weight}</p> */}
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

// export default Detail;