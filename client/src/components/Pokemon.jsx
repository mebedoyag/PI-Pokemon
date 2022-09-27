import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemonDetail } from '../actions/index';
import s from './Pokemon.module.css';

function Pokemon(props) {
  return (
    <div className={s.container}>
      <div>
        <img 
          src={props.image} 
          width={150} 
          height={150} 
          alt="poke" 
        />
      </div>
      <Link to={`/detail/${props.id}`}>
        <p>Name: {props.name}</p> 
      </Link>
      <p>Type one: {props.type[0]}</p>
      <p>Type two: {props.type[1]}</p>
    </div>
  );
 }

 const mapDispatchToProps = (dispatch) => {
  return {
    getPokemonDetail: (id) => dispatch(getPokemonDetail(id))
  }
 };

 export default connect(
  null,
  mapDispatchToProps
 )(Pokemon);