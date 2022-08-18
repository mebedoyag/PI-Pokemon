import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Pokemon from './Pokemon';
import s from './Pokemons.module.css';

function Ordered(props) {
  let params = useParams();
  let name = params.name;
  let pokeOrdered = [];

  const pokeNumber = 12;
  const currentPokemons = props.pokemons.slice(props.page * pokeNumber, (props.page + 1) * pokeNumber);

  if (name === "asc") {
    pokeOrdered = currentPokemons.sort((a, b) => {
      const nameA = a.name;
      const nameB = b.name;

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  } else {
    pokeOrdered = currentPokemons.sort((a, b) => {
      const nameA = a.name;
      const nameB = b.name;

      if (nameA < nameB) return 1;
      if (nameA > nameB) return -1;
      return 0;
    });
  }

  return (
    <div>
      <h1>Helloo</h1>
      <div className={s.wrapper}>
        {pokeOrdered.map((poke, index) => <Pokemon name={poke.name} type={poke.typeNames} image={poke.imgUrl} key={index + 1} id={poke.id} />)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemonsLoaded,
    types: state.types,
    page: state.currentPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ordered);