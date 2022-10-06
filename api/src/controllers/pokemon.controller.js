const axios = require('axios');
const { Pokemon, Type } = require('../db');
const { formatPokemon } = require('../utils');

const endPoint = 'https://pokeapi.co/api/v2/pokemon?limit=40&offset=0';
const endPointPoke = 'https://pokeapi.co/api/v2/pokemon/';

exports.createPokemon = async (req, res) => {
  try {
    const { name, typeOne, typeTwo } = req.body;
    
    const pokemon = await Pokemon.create({ name });
    await pokemon.setTypes([typeOne, typeTwo]);
  
    res.json(pokemon); 
    
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

exports.getPokemons = async (req, res) => {
  try {
    const respPokemonsUrls = await axios.get(endPoint);
    const dataUrls = respPokemonsUrls.data.results;

    const respPokemonsDetail = await Promise.all(dataUrls.map(async (poke) => {
      return axios.get(poke.url);
    }));
    
    const pokemonsData = respPokemonsDetail.map((poke) => {
      const { id, name, types } = poke.data;
      const pokemonTypes = types.map(typeObj => typeObj.type.name);

      return { id, name, types: pokemonTypes };
    });

    const pokemonsTypes = await Pokemon.findAll({
      attributes: ['id', 'name'],
      include: Type
    });
    const pokemonsDb = pokemonsTypes.map((poke) => ({
      id: poke.id,
      name: poke.name,
      types: poke.types.map(type => type.name),
    }))

    res.json([...pokemonsData, ...pokemonsDb]);

  } catch (error) { 
    res.status(500).json({
      message: error.message,
    })
  }
};

exports.getPokemon = async (req, res) => {
  const { idPokemon } = req.params;

  if (!isNaN(Number(idPokemon))) {
    const response = await axios.get(`${endPointPoke}${idPokemon}`);
    const pokemon = formatPokemon(response.data);
    console.log(Object.keys(response.data));
    
    res.json(pokemon);
    return;
  }

  const pokemon = await Pokemon.findOne({
    where: {
      id: idPokemon
    },
    include: Type
   });
   const types = pokemon.types.map((type) => type.name);
   
  res.json({
    ...pokemon.dataValues,
    types,
  }); 
};

