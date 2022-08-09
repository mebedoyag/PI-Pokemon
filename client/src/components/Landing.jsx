import { Link } from 'react-router-dom';
import { getPokemons } from '../actions/index';
import { connect } from 'react-redux';

function Landing(props) {
  return (
    <div>
      <h1>Henry Pokemon</h1>
      <Link to="/home">
        <button onClick={() => {
          props.getPokemons();
          // console.log(props.pokemons);
          }}>Ingresar</button>
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemonsLoaded
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: () => dispatch(getPokemons())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);

// export default Landing;