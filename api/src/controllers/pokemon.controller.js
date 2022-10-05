const axios = require('axios');
const { Pokemon } = require('../db');

const endPoint = 'https://pokeapi.co/api/v2/pokemon?limit=40&offset=0';

exports.createPokemon = async (req, res) => {
  try {
    const { name, typeOne, typeTwo } = req.body;
    
    const pokemon = await Pokemon.create({ name });
    await pokemon.setTypes([typeOne, typeTwo]);
  
    res.json(pokemon); 
    
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

// , async (req, res) => {
//   const { name, 
//     typeOne, 
//     typeTwo, 
//     height, 
//     weight,
//     life,
//     attack,
//     defense,
//     speed, 
//   } = req.body; 
//   const imgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/800.png";

//   const poke = await Pokemon.create({ name, height, weight, imgUrl, life, attack, defense, speed });
//   await poke.setTypes([typeOne]);

//   res.json(poke);
// }

exports.getPokemons = async (req, res) => {
  try {
    const respPokemonsUrls = await axios.get(endPoint);
    const dataUrls = respPokemonsUrls.data.results;

    const respPokemonsDetail = await Promise.all(dataUrls.map(async (poke) => {
      return axios.get(poke.url);
    }));
    
    const dataPokemons = respPokemonsDetail.map((poke) => {
      const { id, name, types } = poke.data;
      const pokemonTypes = types.map(typeObj => typeObj.type.name);

      return { id, name, types: pokemonTypes };
    });
    res.json(dataPokemons);

  } catch (error) { 
    res.status(500).json({
      message: error.message,
    })
  }
};

// , (req, res) => {
//   const { name } = req.query;

//   if (name) {
//     utils.getPokeDataDetail({ url: `https://pokeapi.co/api/v2/pokemon/${name}` })
//       .then(data => {
//         res.json(data);
//       })
//       .catch(err => {
//         Pokemon.findAll({
//           where: {
//             name: name
//           }
//         })
//           .then(poke => {
//             res.json(poke);
//           })
//           .catch(err => {
//             res.status(404).json('Not found');
//           })
//       });
//   } else {
//     axios.get('https://pokeapi.co/api/v2/pokemon?limit=40&offset=0')
//       .then(resp => {
  
//         Promise.all(resp.data.results.map(poke => utils.getPokeData(poke)))
//           .then(async values => {
            
//             const pokes = await Pokemon.findAll({
//               include: Type,
//             });
//             const result = pokes.map(poke => ({
//               name: poke.name,
//               id: poke.id,
//               typeNames: [poke.types[0].name],
//               imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/800.png'
//             }));

//             res.json([...values, ...result]);

//           })
//           .catch(err => {
//             console.log(err);
//           })
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }
// }

