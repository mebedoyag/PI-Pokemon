const initialState = {
  pokemonsLoaded: [],
  pokemonDetail: {},
  currentPokemons: []
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

  if (action.type === "GET_CURRENT_POKEMONS") {
    return {
      ...state,
      currentPokemons: action.payload
    }
  }

  return state;
}

export default rootReducer;