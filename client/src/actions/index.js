const host = 'http://localhost:3001';

export function getPokemons() {
  return function(dispatch) {
    return fetch(`${host}/pokemons`)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ type: "GET_POKEMONS", payload: data })
      });
  }
}

export function getPokemonDetail(idPokemon) {
  return function(dispatch) {
    return fetch(`${host}/pokemons/${idPokemon}`)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ 
          type: "GET_POKEMON_DETAIL", 
          payload: data 
        });
        dispatch(toggleLoading());
      });
  }
}

export function getPokemonByName(name) {
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
        dispatch({ type: "POST_POKEMON", payload: data })
      });
  }
}

export function resetPokemonDetail() {
  return { type: "RESET_POKEMON_DETAIL" };
}

export function changePage(page) {
  return {
    type: "CHANGE_PAGE",
    payload: page
  }
}

export function toggleLoading() {
  return {
    type: "TOGGLE_LOADING",
  }
}