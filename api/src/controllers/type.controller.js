const axios = require('axios');
const { Type } = require('../db');

const endPoint = 'https://pokeapi.co/api/v2/type';

exports.createTypes = async (req, res) => {
  try {
    const response = await axios.get(endPoint);
    const typesData = response.data.results;
    
    const types = typesData.map(typeObj => ({ 
      name: typeObj.name 
    }));
    const result = await Type.bulkCreate(types);
    res.json(types);
    
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
};

exports.getTypes = async (req, res) => {
  try {
    const types = await Type.findAll();
    res.json(types);
    
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
};