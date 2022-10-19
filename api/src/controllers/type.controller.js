const axios = require('axios');
const { Type } = require('../db');

const endPoint = 'https://pokeapi.co/api/v2/type';

exports.fetchAndCreateTypes = async (req, res) => {
  try {
    const types = await Type.findAll();

    if (types.length) {
      res.json(types);
      return;
    }

    const responseObj = await axios.get(endPoint);
    const typesResult = responseObj.data.results;

    const typesNames = typesResult.map(typeObj => ({ 
      name: typeObj.name 
    }));
    const result = await Type.bulkCreate(typesNames);
    res.json(result);
 
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
};