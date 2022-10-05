const express = require('express');
const router = express.Router();
const axios = require('axios');
const utils = require('../utils');

const { getPokemons } = require('../controllers/pokemon.controller');

const { Pokemon, Type, PokemonType } = require('../db');

router.get('/pokemons', getPokemons);

router.get('/pokemons/:idPokemon', async (req, res) => {
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
    const poke = await Pokemon.findOne({
      where: {
        id: idPokemon
      },
      include: Type
    });
    const typeNames = [poke.types[0].name];
    const pokeData = { 
      name: poke.name, 
      typeNames, 
      imgUrl: poke.imgUrl, 
      height: poke.height, 
      id: poke.id, 
      weight: poke.weight,
      life: poke.life,
      attack: poke.attack,
      defense: poke.defense,
      speed: poke.speed 
    };
    res.json(pokeData);
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
});

router.get('/types', async (req, res) => {
  const types = await Type.findAll();

  if (!types.length) {
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
})

module.exports = router;
