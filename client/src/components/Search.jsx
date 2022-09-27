import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getPokemonByName } from '../actions/index';
import { connect } from 'react-redux';
import s from './Search.module.css';

function Search(props) {
  const [input, setInput] = useState('');

  return (
    <div>
      <input 
        className={s.global} 
        type="text" 
        onChange={(e) => setInput(e.target.value)} 
        value={input} 
      />
      <Link to={`/detail?name=${input}`}>
        <button 
          className={`${s.global} ${s.btt}`} 
          onClick={() => props.getPokemonByName(input)}
        >
          <span>Le's go</span>
        </button>
      </Link>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemonByName: name => dispatch(getPokemonByName(name))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
