const express = require('express');
const stringsController = require('../controller/strings');

const router = express.Router();

router.get('/hello/:word', stringsController.hello);

router.get('/upper/:word', stringsController.uppercase);

router.get('/lower/:word', stringsController.lowercase);

router.get('/first-characters/hello', stringsController.firstCharacter);

router.get('/first-characters/:word', stringsController.firstCharacters);

module.exports = router;
