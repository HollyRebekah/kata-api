const express = require('express');
const router = express.Router();
const numbersController = require('../controller/numbers');

router.get('/add/:a/and/:b', numbersController.add);

router.get('/subtract/:a/from/:b', numbersController.subtract);

router.post('/multiply', numbersController.multiply);

router.post('/divide', numbersController.divide);

router.post('/remainder', numbersController.remainder);

module.exports = router;
