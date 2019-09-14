const express = require('express');
const strings = require('../lib/strings');

const router = express.Router();

router.get('/hello/:word', (req, res) => {
  const param = req.params.word;
  res.json({ result: strings.sayHello(param) });
});

router.get('/upper/:word', (req, res) => {
  const param = req.params.word;
  res.json({ result: strings.uppercase(param) });
});

router.get('/lower/:word', (req, res) => {
  const param = req.params.word;
  res.json({ result: strings.lowercase(param) });
});


router.get('/first-characters/hello', (req, res) => {
  res.json({ result: strings.firstCharacter('hello') });
});

router.get('/first-characters/:word', (req, res) => {
  const param = req.params.word;
  const query = req.query.length;
  res.json({ result: strings.firstCharacters(param, query) });
});

module.exports = router;
