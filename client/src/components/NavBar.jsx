import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <p>LOGO</p>
      <h1>Pokemon</h1>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/creation">
          <li>Create</li>
        </Link>
      </ul>
    </div>
  ); 
}

export default NavBar;