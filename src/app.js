const express = require('express');
const strings = require('./lib/strings');
const numbers = require('./lib/numbers');

const app = express();

app.get('/strings/hello/:word', (req, res) => {
  const param = req.params.word;
  res.json({ result: strings.sayHello(param) });
});

app.get('/strings/upper/:word', (req, res) => {
  const param = req.params.word;
  res.json({ result: strings.uppercase(param) });
});

app.get('/strings/lower/:word', (req, res) => {
  const param = req.params.word;
  res.json({ result: strings.lowercase(param) });
});

app.get('/strings/first-characters/hello', (req, res) => {
  res.json({ result: strings.firstCharacter('hello') });
});

app.get('/strings/first-characters/:word', (req, res) => {
  const param = req.params.word;
  const query = req.query.length;
  res.json({ result: strings.firstCharacters(param, query) });
});

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const num1 = parseInt(req.params.a);
  const num2 = parseInt(req.params.b);
  res.json({ result: numbers.add(num1, num2) });
});

module.exports = app;
