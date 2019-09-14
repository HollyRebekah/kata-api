const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const app = express();

app.get('/strings/hello/:word', (req, res) => {
  const param = req.params.word;
  res.json({ result: sayHello(param) });
});

app.get('/strings/upper/:word', (req, res) => {
  const param = req.params.word;
  res.json({ result: uppercase(param) });
});

app.get('/strings/lower/:word', (req, res) => {
  const param = req.params.word;
  res.json({ result: lowercase(param) });
});

app.get('/strings/first-characters/hello', (req, res) => {
  res.json({ result: firstCharacter('hello') });
});

app.get('/strings/first-characters/:word', (req, res) => {
  const param = req.params.word;
  const query = req.query.length;
  console.log(query);
  res.json({ result: firstCharacters(param, query) });
});

module.exports = app;
