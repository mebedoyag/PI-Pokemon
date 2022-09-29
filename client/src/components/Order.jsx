import { useHistory } from 'react-router-dom';

function Order() {
  let history = useHistory();

  const handleChange = (e) => {
    const path = `/home?type=order&option=${e.target.value}`;
    history.replace(path);
  }

  return (
    <div>
      <span>Order: </span>
      <input 
        type="radio"  
        id="desc"   
        name="order" 
        value="desc" 
        onChange={handleChange} 
      />
      <label htmlFor="desc">Descendent</label>
      <input 
        type="radio" 
        id="asc" 
        name="order" 
        value="asc" 
        onChange={handleChange} 
      />
      <label htmlFor="asc">Ascendant</label>
    </div>
  )
}

export default Order;