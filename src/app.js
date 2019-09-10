const express = require('express');
const {
  sayHello,
  uppercase,
} = require('./lib/strings');

const app = express();

app.get('/strings/hello/:word', (req, res) => {
  const param = req.params.word;
  res.status(200).json({ result: sayHello(param) });
});

app.get('/strings/upper/:word', (req, res) => {
  const param = req.params.word;
  res.json({ result: uppercase(param) });
});

module.exports = app;
