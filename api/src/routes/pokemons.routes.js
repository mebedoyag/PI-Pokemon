const express = require('express');
const router = express.Router();
const axios = require('axios');
const utils = require('../utils');

const {  
  createPokemon,
  getPokemons,
  getPokemon
} = require('../controllers/pokemon.controller');

const { Pokemon, Type, PokemonType } = require('../db');

router.post('/pokemons', createPokemon);
router.get('/pokemons', getPokemons);
router.get('/pokemons/:idPokemon', getPokemon);

router.get('/test', async (req, res) => {
  const types = await Type.findAll();

  if (!types.length) {
    res.json('There is nothing')
  } else {
    res.json(types);
  }
})

module.exports = router;
