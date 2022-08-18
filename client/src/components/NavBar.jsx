import { Link } from 'react-router-dom';
import s from './NavBar.module.css';
import pokeball from '../images/pokeball.png';

function NavBar() {
  return (
    <div className={s.container}>
      <div>
        <img src={pokeball} alt="" />
      </div>
      <h1 className={s.title}>Pokemon</h1>
      <ul className={s.list}>
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