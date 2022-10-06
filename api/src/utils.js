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