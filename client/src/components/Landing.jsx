import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import s from './Landing.module.css';

import { 
  getPokemons, 
  getTypes 
} from '../actions/index';

function Landing(props) {
  useEffect(() => {
    localStorage.removeItem('pokes');
    props.getPokemons();
    props.getTypes();
  }, [])

  return (
    <div className={s.hero}>
      <div className={s.container}>
        <h1 className={s.title}>Henry Pokemon</h1>
        <Link to="/home">
          <button className={s.bttn}>Ingresar</button>
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
