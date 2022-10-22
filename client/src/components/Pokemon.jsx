import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePokemon } from '../actions/index';
import s from './Pokemon.module.css';

function Pokemon(props) {
  const handleClick = () => {
    props.deletePokemon(props.id);
  }

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
      <button onClick={handleClick}>x</button>
    </div>
  );
 }

 const mapDispatchToProps = (dispatch) => {
  return {
    deletePokemon: (id) => dispatch(deletePokemon(id))
  }
 };

 export default connect(
  null,
  mapDispatchToProps
 )(Pokemon);