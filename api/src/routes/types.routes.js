const express = require('express');
const router = express.Router();

const { 
  createTypes, 
  getTypes 
} = require('../controllers/type.controller');

router.get('/', getTypes);
router.post('/', createTypes);

module.exports = router;

