const express = require('express');
const router = express.Router();

const {  
  createPokemon,
  getPokemons,
  getPokemon
} = require('../controllers/pokemon.controller');

router.post('/', createPokemon);
router.get('/', getPokemons);
router.get('/:idPokemon', getPokemon);

module.exports = router;
