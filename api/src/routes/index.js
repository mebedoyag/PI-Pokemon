// const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


// const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// ---> MINE

const express = require('express');
const router = express.Router();
const axios = require('axios');
const utils = require('../utils');

router.get('/pokemons', (req, res) => {
  // const { name } = req.query; // -> Use this when a query arrived

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
  const { name, type } = req.body; 
  res.json(`You sent ${name}, ${type} pokemon`);
})

router.get('/types', (req, res) => {
  res.json('Later I will send you the types ;)')
})

// <--- MINE


module.exports = router;
