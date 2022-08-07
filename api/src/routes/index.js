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

const { Pokemon, Type } = require('../db');
// const Type = require('../models/Type'); // -> TO DELETE

router.get('/pokemons', (req, res) => {
  const { name } = req.query;

  if (name) {
    utils.getPokeDataDetail({ url: `https://pokeapi.co/api/v2/pokemon/${name}` })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        Pokemon.findAll({
          where: {
            name: name
          }
        })
          .then(poke => {
            res.json(poke);
          })
          .catch(err => {
            res.status(404).json('Not found');
          })
      });
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

  if ( !isNaN( Number(idPokemon) ) ) {
    utils.getPokeDataDetail({ url: `https://pokeapi.co/api/v2/pokemon/${idPokemon}` })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err);
        res.status(404).json('Not found');
      })
  } else {
    Pokemon.findByPk(idPokemon)
      .then(value => {
        res.json(value);
      })
      .catch(err => {
        res.status(404).json('Not found');
      })
  }
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
  axios.get('https://pokeapi.co/api/v2/type')
    .then(resp => {
      const types = resp.data.results.map(obj => {
        return { name: obj.name }
      });
      Type.bulkCreate(types);

      res.json(types);
    })
    .catch(err => {
      console.log(err);
    })
});

// <--- MINE

module.exports = router;
