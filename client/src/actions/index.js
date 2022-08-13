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

export function getPokemonDetail(idPokemon) {
  // console.log(idPokemon);
  return function(dispatch) {
    return fetch(`${host}/pokemons/${idPokemon}`)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "GET_POKEMON_DETAIL", payload: data })
      });
  }
}

export function getPokemonByName(name) {
  // console.log(name);
  return function(dispatch) {
    return fetch(`${host}/pokemons?name=${name}`)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "GET_POKEMON_DETAIL", payload: data })
      });
  }
}

export function getTypes() {
  return function(dispatch) {
    return fetch(`${host}/types`)
      .then(resp => resp.json())
      .then(data => {
        // console.log(data);
        dispatch({ type: "GET_TYPES", payload: data })
      });
  }
}

export function postPokemons(poke) {
  return function(dispatch) {
    return fetch(`${host}/pokemons`, { 
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json;charset=utf-8' 
      }, 
      body: poke
    })
      .then(resp => resp.json())
      .then(data => {
        // console.log(data);
        dispatch({ type: "POST_POKEMON", payload: data })
      });
  }
}

// export function getCurrentPokemons(pokemons, num) {
//   const pokeByPage = 12;  
//   const currentPokemons = pokemons.slice(num * pokeByPage, (num + 1) * pokeByPage);

//   return {
//     type: "GET_CURRENT_POKEMONS",
//     payload: currentPokemons,
//   }
// }