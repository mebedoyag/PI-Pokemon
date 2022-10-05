const axios = require('axios');
const { Type } = require('../db');

const endPoint = 'https://pokeapi.co/api/v2/type';

exports.createTypes = async (req, res) => {
  const response = await axios.get(endPoint);
  const typesData = response.data.results;
  
  const types = typesData.map(typeObj => ({ 
    name: typeObj.name 
  }));
  const result = await Type.bulkCreate(types);
  res.json(types);
};

exports.getTypes = async (req, res) => {
  const types = await Type.findAll();
  res.json(types);
};