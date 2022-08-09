import { Link } from 'react-router-dom';

function Pokemon() {
  return (
    <div>
      <h1>Pokemon</h1>
      <div>Image</div>
      <Link to="/detail/2">
        <p>Name</p>
      </Link>
      <p>Type</p>
    </div>
  );
 }

 export default Pokemon;