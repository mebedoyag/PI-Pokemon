const express = require('express');
const router = express.Router();

const { fetchAndCreateTypes } = require('../controllers/type.controller');

router.get('/', fetchAndCreateTypes);

module.exports = router;

