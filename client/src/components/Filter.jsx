import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTypes } from '../actions/index';
import { useEffect } from 'react';

function Filter(props) {
  let history = useHistory();

  const handleChange = (e) => {
    const path = `/home?type=filter&option=${e.target.value}`;
    history.replace(path);
  }

  // useEffect(() => {
  //   props.getTypes()
  // }, []);

  return (
    <div>
      <label>Filter by: </label>
      <select onChange={handleChange}>
        <optgroup label="TYPE">
          {props.types.map(type => (
            <option 
              key={type.id} 
              value={type.name}>{type.name}
            </option>))}
        </optgroup>
        <optgroup label="ORIGIN">
          <option key={100} value="existing">Existing</option>
          <option key={101} value="created">Created</option>
        </optgroup>
      </select>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    types: state.types
  }
}

export default connect(
  mapStateToProps,
  { getTypes }
)(Filter);