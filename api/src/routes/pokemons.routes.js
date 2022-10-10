const express = require('express');
const router = express.Router();

const {  
  createPokemon,
  getPokemons,
  getPokemon,
  updatePokemon, 
  deletePokemon
} = require('../controllers/pokemon.controller');

router.post('/', createPokemon);
router.get('/', getPokemons);
router.get('/:idPokemon', getPokemon);
router.put('/:idPokemon', updatePokemon);
router.delete('/:idPokemon', deletePokemon);

module.exports = router;
