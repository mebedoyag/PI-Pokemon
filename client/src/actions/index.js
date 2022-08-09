// const host = 'http://localhost:3001/pokemons';
const host = 'http://localhost:3001';

export function getPokemons() {
  return function(dispatch) {
    return fetch(`${host}/pokemons`)
      .then(resp => resp.json())
      .then(data => {
        // console.log(data);
        dispatch({ type: "GET_POKEMONS", payload: data })
      });
  }
}

export function getPokemonDetail() {
  return function(dispatch) {
    return fetch(`${host}/pokemons/1`)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        dispatch({ type: "GET_POKEMON_DETAIL", payload: data })
      });
  }
}