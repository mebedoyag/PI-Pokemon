const express = require('express');
const router = express.Router();

const {  
  createPokemon,
  getPokemons,
  getPokemon
} = require('../controllers/pokemon.controller');

router.post('/pokemons', createPokemon);
router.get('/pokemons', getPokemons);
router.get('/pokemons/:idPokemon', getPokemon);

module.exports = router;
