import { Link } from 'react-router-dom';

function Pokemon({ name, type, image }) {
  return (
    <div>
      <h1>Pokemon</h1>
      <div>
        <img src={image} alt="poke" />
      </div>
      <Link to="/detail/2">
        <p>{name}</p>
      </Link>
      <p>{type}</p>
    </div>
  );
 }

 export default Pokemon;