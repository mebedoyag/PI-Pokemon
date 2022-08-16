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
      <Link to={`/detail/${props.id}`}>
        <p>Name: {props.name}</p> 
      </Link>
      <p>Type one: {props.type[0]}</p>
      <p>Type two: {props.type[1]}</p>
    </div>
  );
 }

 const mapStateToProps = (state) => {
  return {};
 };

 const mapDispatchToProps = (dispatch) => {
  return {
    getPokemonDetail: (id) => dispatch(getPokemonDetail(id))
  }
 };

 export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(Pokemon);