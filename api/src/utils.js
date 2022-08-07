const axios = require('axios');

exports.getPokeData = ({ url }) => {
  return axios.get(url)
    .then(resp => {
      const { name, types, sprites } = resp.data;

      const typeNames = types.map(obj => obj.type.name);
      const imgUrl = sprites.other.dream_world.front_default;

      const pokeData = { name, typeNames, imgUrl };

      return pokeData;
    })
    .catch(err => {
      console.log(err);
    })
};

exports.getPokeDataDetail = ({ url }) => {
  return axios.get(url)
    .then(resp => {
      const { name, types, sprites, height, id, weight } = resp.data;

      const typeNames = types.map(obj => obj.type.name);
      const imgUrl = sprites.other.dream_world.front_default;

      const pokeData = { name, typeNames, imgUrl, height, id, weight };

      return pokeData;
    })
    // .catch(err => {
    //   console.log(err);
    // })
};