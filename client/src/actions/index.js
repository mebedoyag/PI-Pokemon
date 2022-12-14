const host = 'http://localhost:3001';

export function getPokemons() {
  return function(dispatch) {
    dispatch(showLoading(true));
    return fetch(`${host}/pokemons`)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ 
          type: "GET_POKEMONS", 
          payload: data 
        });
        dispatch(showLoading(false));
      });
  }
}

export function getPokemonDetail(idPokemon) {
  return function(dispatch) {
    dispatch(showLoading(true));
    return fetch(`${host}/pokemons/${idPokemon}`)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ 
          type: "GET_POKEMON_DETAIL", 
          payload: data 
        });
        dispatch(showLoading(false));
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
        dispatch({ 
          type: "POST_POKEMON", 
          payload: data 
        })
      });
  }
}

export function resetPokemonDetail() {
  return { 
    type: "RESET_POKEMON_DETAIL" 
  };
}

export function getTypes() {
  return function(dispatch) {
    return fetch(`${host}/types`)
      .then(resp => resp.json())
      .then(data => {
        dispatch({ 
          type: "GET_TYPES", 
          payload: data 
        })
      });
  }
}

export function changePage(page) {
  return {
    type: "CHANGE_PAGE",
    payload: page
  };
}

export function showLoading(value) {
  return {
    type: "TOGGLE_LOADING",
    payload: value
  };
}

export function deletePokemon(id) {
  if (typeof id === 'string') {
    fetch(`${host}/pokemons/${id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => console.log('this is the data: ', data));
  }

  return {
    type: "DELETE_POKEMON",
    payload: id
  };
}

export function restorePokemons(pokes) {
  return {
    type: 'GET_POKEMONS',
    payload: pokes
  };
}

export function restoreTypes(types) {
  return {
    type: "GET_TYPES",
    payload: types
  }
}