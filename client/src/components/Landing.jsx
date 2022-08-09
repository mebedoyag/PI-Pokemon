import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div>
      <h1>Henry Pokemon</h1>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
}

export default Landing;