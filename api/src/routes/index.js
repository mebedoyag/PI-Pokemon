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

const { Pokemon, Type, PokemonType } = require('../db');

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
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0')
      .then(resp => {
  
        Promise.all(resp.data.results.map(poke => utils.getPokeData(poke)))
          .then(async values => {
            
            const pokes = await Pokemon.findAll({
              include: Type,
            });
            const result = pokes.map(poke => ({
              name: poke.name,
              id: poke.id,
              typeNames: [poke.types[0].name],
              imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/800.png'
            }));

            res.json([...values, ...result]);

            // res.json(values);
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

router.post('/pokemons', async (req, res) => {
  const { name, 
    typeOne, 
    typeTwo, 
    height, 
    weight,
    life,
    attack,
    defense,
    speed, 
  } = req.body; 
  const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/800.png";

  const poke = await Pokemon.create({ name, height, weight, imgUrl, life, attack, defense, speed });
  await poke.setTypes([typeOne]);

  res.json(poke);

  // Pokemon.create({ name, typeOne })
  //   .then(p => {
  //     Type.findByPk(p.typeOne)
  //       .then(t => {
  //         PokemonType.create({ pokemonId: p.id, typeId: t.id });
  //         res.json(p);
  //       })
  //       .catch(err => {
  //         res.status(404).json('Not created');
  //       })
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
});

router.get('/types', async (req, res) => {
  const types = await Type.findAll();

  if (!types.length) {
    // console.log('There is nothing');
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
  } else {
    res.json(types);
  }
});

router.get('/test', async (req, res) => {
  const types = await Type.findAll();

  if (!types.length) {
    res.json('There is nothing')
  } else {
    res.json(types);
  }
  // const pokes = await Pokemon.findAll({
  //   include: Type,
  // });
  // const result = pokes.map(poke => ({
  //   name: poke.name,
  //   id: poke.id,
  //   typeNames: [poke.types[0].name],
  //   imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/800.png'
  // }))
  // res.json(result);
})

// <--- MINE

module.exports = router;
