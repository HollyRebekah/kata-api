const strings = require('../lib/strings');
const express = require('express');

exports.hello = (req, res) => {
  const param = req.params.word;
  res.status(200).json({ result: strings.sayHello(param) });
};

exports.uppercase = (req, res) => {
  const param = req.params.word;
  res.json({ result: strings.uppercase(param) });
};

exports.lowercase = (req, res) => {
  const param = req.params.word;
  res.json({ result: strings.lowercase(param) });
};

exports.firstCharacter = (req, res) => {
  if (!req.query.length) {
    res.json({ result: strings.firstCharacter('hello') });
  } else {
    express.done();
  }
};

exports.firstCharacters = (req, res) => {
  const param = req.params.word;
  const query = req.query.length;
  res.json({ result: strings.firstCharacters(param, query) });
};
