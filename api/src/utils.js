exports.formatPokemon = function(poke) {
  const { 
    id, 
    name, 
    types,
    height,
    weight,
    sprites
  } = poke;
  const typesFiltered = types.map(typeObj => typeObj.type.name);
  const imgUrl = sprites.other["official-artwork"]["front_default"];

  return {
    id, 
    name, 
    types: typesFiltered,
    height,
    weight,
    imgUrl,
  };
};

exports.formatPokemons = function(pokes) {
  return pokes.map((poke) => {
    const { id, name, types } = poke.data;
    const pokemonTypes = types.map(typeObj => typeObj.type.name);

    return { id, name, types: pokemonTypes };
  });
};

exports.formatPokemonsDb = function(pokes) {
  return pokes.map((poke) => ({
    id: poke.id,
    name: poke.name,
    types: poke.types.map(type => type.name),
  }))
}