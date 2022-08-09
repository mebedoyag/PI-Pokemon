import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemonDetail } from '../actions/index';

function Pokemon(props) {
  return (
    <div>
      <h1>Pokemon</h1>
      <div>
        <img src={props.image} alt="poke" />
      </div>
      <Link to="/detail/1" onClick={() => props.getPokemonDetail()}>
        <p>{props.name}</p>
      </Link>
      <p>{props.type}</p>
    </div>
  );
 }

 const mapStateToProps = (state) => {
  return {};
 };

 const mapDispatchToProps = (dispatch) => {
  return {
    getPokemonDetail: () => dispatch(getPokemonDetail())
  }
 };

 export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(Pokemon);

//  export default Pokemon;