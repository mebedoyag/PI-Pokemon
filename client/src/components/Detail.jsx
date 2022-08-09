import { bulbDetails } from '../pokeData';

function Detail() {
  return (
    <div>
      <h1>Detail</h1>
      <div>
        <img src={bulbDetails.imgUrl} alt="poke details" />
      </div>
      <p>{bulbDetails.name}</p>
      <p>{bulbDetails.typeNames[0]}</p>
      <p>{bulbDetails.height}</p>
      <p>{bulbDetails.weight}</p>
    </div>
  );
}

export default Detail;