const initialState = {
  pokemonsLoaded: [],
  pokemonDetail: {}
};

function rootReducer(state = initialState, action) {
  if (action.type === "GET_POKEMONS") {
    return {
      ...state,
      pokemonsLoaded: action.payload
    };
  }

  return state;
}

export default rootReducer;