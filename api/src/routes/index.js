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

router.get('/pokemons', (req, res) => {
  // const { name } = req.query; // -> Use this when a query arrived

  axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(resp => {

      const getPokeData = ({ name, url }) => {
        return axios.get(url)
          .then(resp => {
            const { types, sprites } = resp.data;
            const typeNames = types.map(obj => obj.type.name);
            const imgUrl = sprites.other.dream_world.front_default;

            const pokeData = { name, typeNames, imgUrl };

            return pokeData;
          })
          .catch(err => {
            console.log(err);
          })
      };

      Promise.all(resp.data.results.map(poke => getPokeData(poke)))
        .then(values => {
          console.log(values);
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
  res.json(`Hello!, i am in pokemon/${idPokemon}`)
})

router.post('/pokemons', (req, res) => {
  const { name, type } = req.body; 
  res.json(`You sent ${name}, ${type} pokemon`);
})

router.get('/types', (req, res) => {
  res.json('Later I will send you the types ;)')
})

// <--- MINE


module.exports = router;
