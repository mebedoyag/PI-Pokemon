import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

function Filter(props) {
  let history = useHistory();

  const handleChange = (e) => {
    const path = `/filter/${e.target.value}`;
    history.replace(path);
  }

  return (
    <div>
      <label>Filter by: </label>
      <select onChange={handleChange}>
        <optgroup label="TYPE">
          {
            props.types.map(type => <option key={type.id} value={type.name}>{type.name}</option>)
          }
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

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);