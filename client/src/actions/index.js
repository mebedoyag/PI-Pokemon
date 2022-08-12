// const host = 'http://localhost:3001/pokemons';
const host = 'http://localhost:3001';

export function getPokemons() {
  return function(dispatch) {
    return fetch(`${host}/pokemons`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        dispatch({ type: "GET_POKEMONS", payload: data })
      });
  }
}

export function getPokemonDetail(idPokemon) {
  console.log(idPokemon);
  return function(dispatch) {
    return fetch(`${host}/pokemons/${idPokemon}`)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "GET_POKEMON_DETAIL", payload: data })
      });
  }
}

export function getPokemonByName(name) {
  console.log(name);
  return function(dispatch) {
    return fetch(`${host}/pokemons?name=${name}`)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "GET_POKEMON_DETAIL", payload: data })
      });
  }
}