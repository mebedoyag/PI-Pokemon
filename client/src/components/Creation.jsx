import { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import s from './Creation.module.css';

import { validate } from '../utils';
import { getTypes } from '../actions/index';
import { postPokemons } from '../actions/index';

const host = 'http://localhost:3001';

function Creation(props) {
  const [input, setInput] = useState({
    name: '',
    typeOne: '',
    height: '',
    weight: '',
    life: '',
    attack: '',
    defense: '',
    speed: ''
  });

  useEffect(() => {
    props.getTypes();
  }, [])

  const [error, setError] = useState({});

  const handleInpChan = (e) => {
    setInput({
      ...input, 
      [e.target.name]: e.target.value
    });
    setError(validate({
      ...input, 
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error.name) {
      alert('No puede crear pokemon');
    } else {
      props.postPokemons(JSON.stringify({ ...input }));
      setInput({
        name: '',
        typeOne: '',
        height: '',
        weight: '',
        life: '',
        attack: '',
        defense: '',
        speed: ''
      });
    }
  }

  return (
    <>
      <NavBar />
      <div className={s.container}>
        <form 
          className={s.form}  
          action={`${host}/pokemons`} 
          method="post" 
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              onChange={handleInpChan} 
              value={input.name} 
            />
            {error.name 
              ? <div className={s.err}>
                  <span >{error.name}</span>
                </div> 
              : null}          
          </div>
          <div>
            <label htmlFor="typeOne">Type</label>
            <select 
              name="typeOne" 
              id="typeOne" 
              onChange={handleInpChan}
            >
              {props.types.map(type => (
                <option 
                  key={type.id} 
                  value={type.id}
                >
                  {type.name}
                </option>))}
            </select>
          </div>
          <div>
            <label htmlFor="height">Height</label>
            <input 
              type="text" 
              name="height" 
              id="height" 
              onChange={handleInpChan} 
              value={input.height} 
            />
          </div>
          <div>
            <label htmlFor="weight">Weight</label>
            <input 
              type="text" 
              name="weight" 
              id="weight" 
              onChange={handleInpChan} 
              value={input.weight} 
            />
          </div>

          <div>
            <label htmlFor="life">Life</label>
            <input 
              type="text" 
              name="life" 
              id="life" 
              onChange={handleInpChan} 
              value={input.life} 
            />
          </div>
          <div>
            <label htmlFor="attack">Attack</label>
            <input 
              type="text" 
              name="attack" 
              id="attack" 
              onChange={handleInpChan} 
              value={input.attack} 
            />
          </div>
          <div>
            <label htmlFor="defense">Defense</label>
            <input 
              type="text" 
              name="defense" 
              id="defense" 
              onChange={handleInpChan} 
              value={input.defense} 
            />
          </div>
          <div>
            <label htmlFor="speed">Speed</label>
            <input 
              type="text" 
              name="speed" 
              id="speed" 
              onChange={handleInpChan} 
              value={input.speed} 
            />
          </div>
          <div className={s.wrapper}>
            <input 
              className={s.bttn} 
              type="submit" 
              value="Create" 
            />
          </div>
        </form>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemonDetail,
    types: state.types
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postPokemons: (poke) => dispatch(postPokemons(poke)),
    getTypes: () => dispatch(getTypes())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Creation);