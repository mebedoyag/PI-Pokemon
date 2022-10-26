import { Link } from 'react-router-dom';
import { getPokemons, getTypes } from '../actions/index';
import { connect } from 'react-redux';
import s from './Landing.module.css';

function Landing(props) {
  return (
    <div className={s.hero}>
      <div className={s.container}>
        <h1 className={s.title}>Henry Pokemon</h1>
        <Link to="/home">
          <button className={s.bttn} onClick={() => {
            localStorage.removeItem('pokes');
            props.getPokemons();
            props.getTypes();
            }}>Ingresar</button>
        </Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemons: () => dispatch(getPokemons()),
    getTypes: () => dispatch(getTypes())
  }
};

export default connect(
  null,
  mapDispatchToProps
)(Landing);
