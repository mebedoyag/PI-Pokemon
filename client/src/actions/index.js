const host = 'http://localhost:3001/pokemons';

export function getPokemons() {
  return function(dispatch) {
    return fetch(host)
      .then(resp => resp.json())
      .then(data => {
        // console.log(data);
        dispatch({ type: "GET_POKEMONS", payload: data })
      });
  }
}