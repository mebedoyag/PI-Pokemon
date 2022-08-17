import { useState } from 'react';
import validate from '../utils';

import { connect } from 'react-redux';
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

  return (
    <form action={`${host}/pokemons`} method="post" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleInpChan} value={input.name} />
      </div>
      <div>
        {/* <label htmlFor="typeOne">Type</label>
        <input type="text" name="typeOne" id="typeOne" onChange={handleInpChan} value={input.typeOne} /> */}
        <label htmlFor="typeOne">Type</label>
        <select name="typeOne" id="typeOne" onChange={handleInpChan}>
          {
            props.types.map(type => <option key={type.id} value={type.id}>{type.name}</option>)
          }
        </select>
      </div>
      <div>
        <label htmlFor="height">Height</label>
        <input type="text" name="height" id="height" onChange={handleInpChan} value={input.height} />
      </div>
      <div>
        <label htmlFor="weight">Weight</label>
        <input type="text" name="weight" id="weight" onChange={handleInpChan} value={input.weight} />
      </div>

      <div>
        <label htmlFor="life">Life</label>
        <input type="text" name="life" id="life" onChange={handleInpChan} value={input.life} />
      </div>
      <div>
        <label htmlFor="attack">Attack</label>
        <input type="text" name="attack" id="attack" onChange={handleInpChan} value={input.attack} />
      </div>
      <div>
        <label htmlFor="defense">Defense</label>
        <input type="text" name="defense" id="defense" onChange={handleInpChan} value={input.defense} />
      </div>
      <div>
        <label htmlFor="speed">Speed</label>
        <input type="text" name="speed" id="speed" onChange={handleInpChan} value={input.speed} />
      </div>
      
      <div>
        <input type="submit" value="Create" />
      </div>
    </form>
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
    postPokemons: (poke) => dispatch(postPokemons(poke))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Creation);