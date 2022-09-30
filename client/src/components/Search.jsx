import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { getPokemonByName } from '../actions/index';
import { connect } from 'react-redux';
import s from './Search.module.css';

function Search(props) {
  const [input, setInput] = useState('');
  const history = useHistory();

  const handleClick = (name) => {
    const pokemon = props.pokemons.filter(poke => {
      return poke.name === name;
    });
    if (pokemon.length) {
      history.push(`/detail/${pokemon[0].id}`);
      return;
    }
    alert('Pokemon not found');
  }
  return (
    <div>
      <input 
        className={s.global} 
        type="text" 
        onChange={(e) => setInput(e.target.value)} 
        value={input} 
      />
      <button 
        className={`${s.global} ${s.btt}`} 
        onClick={() => handleClick(input)}
      >
        <span>Le's go</span>
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  pokemons: state.pokemonsLoaded
})

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemonByName: name => dispatch(getPokemonByName(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
