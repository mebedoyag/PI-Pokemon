const initialState = {
  pokemonsLoaded: [],
  pokemonDetail: {},
  types: []
};

function rootReducer(state = initialState, action) {
  if (action.type === "GET_POKEMONS") {
    return {
      ...state,
      pokemonsLoaded: action.payload
    };
  }

  if (action.type === "GET_POKEMON_DETAIL") {
    return {
      ...state,
      pokemonDetail: action.payload
    }
  }

  if (action.type === "GET_TYPES") {
    return {
      ...state,
      types: action.payload
    }
  }

  if (action.type === "POST_POKEMON") {
    return {
      ...state,
      // pokemonsLoaded: [...pokemonsLoaded, action.payload]
    }
  }

  return state;
}

export default rootReducer;