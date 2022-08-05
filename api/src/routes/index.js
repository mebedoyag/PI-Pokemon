// const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


// const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// ---> MINE

// Todo's
// ** Limit the pokemon general search to 40 -- https://pokeapi.co/api/v2/pokemon?limit=40&offset=0
// ** Refactor the functions in utils.js (using abstraction)

const express = require('express');
const router = express.Router();
const axios = require('axios');
const utils = require('../utils');

const { Pokemon } = require('../db');

router.get('/pokemons', (req, res) => {
  const { name } = req.query;

  if (name) {
    utils.getPokeDataDetail({ url: `https://pokeapi.co/api/v2/pokemon/${name}` })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    })
  } else {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(resp => {
  
        Promise.all(resp.data.results.map(poke => utils.getPokeData(poke)))
          .then(values => {
            res.json(values);
          })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err);
      })
  }
});

router.get('/pokemons/:idPokemon', (req, res) => {
  const { idPokemon } = req.params;

  utils.getPokeDataDetail({ url: `https://pokeapi.co/api/v2/pokemon/${idPokemon}` })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.log(err);
    })
});

router.post('/pokemons', (req, res) => {
  const { name, typeOne, typeTwo, height, weight } = req.body; 

  Pokemon.create({ name, typeOne })
    .then(p => {
      res.json(p);
    })
    .catch(err => {
      console.log(err);
    })
})

router.get('/types', (req, res) => {
  res.json('Later I will send you the types ;)')
})

// <--- MINE


module.exports = router;
