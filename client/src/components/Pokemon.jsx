import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemonDetail } from '../actions/index';

function Pokemon(props) {
  const handleClick = (id) => {
    props.getPokemonDetail(id)
  }

  return (
    <div>
      <h1>Pokemon</h1>
      <div>
        <img src={props.image} alt="poke" />
      </div>
      <Link to={`/detail/${props.id}`}>
        <p onClick={() => handleClick(props.id)}>{props.name}</p>
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
    getPokemonDetail: (id) => dispatch(getPokemonDetail(id))
  }
 };

 export default connect(
  mapStateToProps,
  mapDispatchToProps
 )(Pokemon);
