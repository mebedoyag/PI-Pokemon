const axios = require('axios');
const { Pokemon, Type } = require('../db');
const { 
  formatPokemon,
  formatPokemons,
  formatPokemonsDb 
} = require('../utils');

const endPoint = 'https://pokeapi.co/api/v2/pokemon?limit=40&offset=0';
const endPointPoke = 'https://pokeapi.co/api/v2/pokemon/';

exports.createPokemon = async (req, res) => {
  try {
    const { name, typeOne, height, weight } = req.body;
    
    const pokemon = await Pokemon.create({ name, height, weight });
    await pokemon.setTypes([typeOne]);
    const { id, imgUrl } = pokemon;

    const pokeTypeObj = await Type.findByPk(typeOne);

    res.json({ id, name, imgUrl, types: [pokeTypeObj.name] }); 
    
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
};

exports.getPokemons = async (req, res) => {
  try {
    const responseObj = await axios.get(endPoint);
    const results = responseObj.data.results;

    const responsePokes = await Promise.all(results.map(poke => {
      return axios.get(poke.url);
    }));
    const pokemonsData = formatPokemons(responsePokes);

    const pokemonsTypes = await Pokemon.findAll({
      attributes: ['id', 'name', 'imgUrl'],
      include: Type
    });
    const pokemonsDb = formatPokemonsDb(pokemonsTypes);

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
    
    res.json(pokemon);
    return;
  }

  const pokemon = await Pokemon.findOne({
    where: {
      id: idPokemon
    },
    include: Type
   });
  const [result] = formatPokemonsDb([pokemon]);
  const { height, weight } = pokemon;

  res.json({ ...result, height, weight });
};

exports.updatePokemon = async (req, res) => { 
  try {
    const { idPokemon } = req.params;
    const { name, height, weight } = req.body;
    
    const pokemon = await Pokemon.findByPk(idPokemon);
    pokemon.name = name;
    pokemon.height = height;
    pokemon.weight = weight;
    await pokemon.save();
  
    res.json(pokemon);
    
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

exports.deletePokemon = async (req, res) => {
  const { idPokemon } = req.params;
  console.log(idPokemon);

  await Pokemon.destroy({
    where: {
      id: idPokemon
    }
  });

  res.json('deleting pokemons');
};

