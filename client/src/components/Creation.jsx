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
    weight: ''
  });

  const [error, setError] = useState({});

  const handleInpChan = (e) => {
    setInput({
      ...input, 
      [e.target.name]: e.target.value
    });
    // alert(validate);
    setError(validate({
      ...input, 
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    props.postPokemons(JSON.stringify({ ...input }));
  }

  return (
    <form action={`${host}/pokemons`} method="post" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleInpChan} value={input.name} />
      </div>
      <div>
        <label htmlFor="typeOne">Type</label>
        <input type="text" name="typeOne" id="typeOne" onChange={handleInpChan} value={input.typeOne} />
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
        <input type="submit" value="Create" />
      </div>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemonDetail
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

// export default Creation;