import { useHistory } from 'react-router-dom';

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
          <option value="normal">Normal</option>
          <option value="fighting">fighting</option>
          <option value="flying">Flying</option>
          <option value="poison">Poison</option>
        </optgroup>
        <optgroup label="ORIGIN">
          <option value="existing">Existing</option>
          <option value="created">Created</option>
        </optgroup>
      </select>
    </div>
  )
}

export default Filter;