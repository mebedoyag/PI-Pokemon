const axios = require('axios');
const { Type } = require('../db');

const endPoint = 'https://pokeapi.co/api/v2/type';

exports.fetchAndCreateTypes = async (req, res) => {
  try {
    const responseObj = await axios.get(endPoint);
    const typesResult = responseObj.data.results;

    const types = typesResult.map(typeObj => ({ 
      name: typeObj.name 
    }));
    const result = await Type.bulkCreate(types);
    res.json(result);
    
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
};