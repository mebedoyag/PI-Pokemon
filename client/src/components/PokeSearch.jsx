import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getPokemonByName } from '../actions/index';
import { connect } from 'react-redux';

function PokeSearch(props) {
  const [input, setInput] = useState('');

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
      <Link to={`/detail?name=${input}`}>
        <button onClick={() => props.getPokemonByName(input)}>
          <span>Le's go</span>
        </button>
      </Link>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPokemonByName: name => dispatch(getPokemonByName(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokeSearch);
