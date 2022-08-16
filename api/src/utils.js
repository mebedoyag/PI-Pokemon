const axios = require('axios');

exports.getPokeData = ({ url }) => {
  return axios.get(url)
    .then(resp => {
      const { name, id, types, sprites } = resp.data;

      const typeNames = types.map(obj => obj.type.name);
      const imgUrl = sprites.other.dream_world.front_default;

      const pokeData = { name, id, typeNames, imgUrl };

      return pokeData;
    })
    .catch(err => {
      console.log(err);
    })
};

exports.getPokeDataDetail = ({ url }) => {
  return axios.get(url)
    .then(resp => {
      const { name, types, sprites, height, id, weight, stats } = resp.data;

      const typeNames = types.map(obj => obj.type.name);
      const imgUrl = sprites.other.dream_world.front_default;

      const life = stats[0].base_stat;
      const attack = stats[1].base_stat;
      const defense = stats[2].base_stat;
      const speed = stats[5].base_stat;

      const pokeData = { 
        name, 
        typeNames, 
        imgUrl, 
        height, 
        id, 
        weight,
        life,
        attack,
        defense,
        speed 
      };

      return pokeData;
    })
    // .catch(err => {
    //   console.log(err);
    // })
};