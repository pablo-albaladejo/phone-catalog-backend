const express = require('express');
const router = express.Router();

//Phones
router.use('/phones', require('../controllers/phones'));

//Root
router.use('/', require('../controllers/root'));

module.exports = router