const express = require('express');
const numbers = require('./lib/numbers');
const stringsRouter = require('./routes/strings');

const app = express();

app.use(express.json());
app.use('/strings', stringsRouter);

const isNumeric = (string) => {
  return !Number.isNaN(parseInt(string));
};

app.get('/numbers/add/:a/and/:b', (req, res) => {
  if (isNumeric(req.params.a) && isNumeric(req.params.b)) {
    const num1 = parseInt(req.params.a);
    const num2 = parseInt(req.params.b);
    res.json({ result: numbers.add(num2, num1) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  if (isNumeric(req.params.a) && isNumeric(req.params.b)) {
    const num1 = parseInt(req.params.a);
    const num2 = parseInt(req.params.b);
    res.json({ result: numbers.subtract(num2, num1) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

app.post('/numbers/multiply', (req, res) => {
  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNumeric(req.body.a) && isNumeric(req.body.b)) {
    const num1 = parseInt(req.body.a);
    const num2 = parseInt(req.body.b);
    res.json({ result: numbers.multiply(num1, num2) });
  } else {
    res.status(400).json({ error: 'Parameters \"a\" and \"b\" must be valid numbers.' });
  }
});

app.post('/numbers/divide', (req, res) => {
  if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (!req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNumeric(req.body.a) && isNumeric(req.body.b)) {
    const num1 = parseInt(req.body.a);
    const num2 = parseInt(req.body.b);
    res.json({ result: numbers.divide(num1, num2) });
  } else {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
});

app.post('/numbers/remainder', (req, res) => {
  if (req.body.b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (!req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNumeric(req.body.a) && isNumeric(req.body.b)) {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({ result: numbers.remainder(a, b) });
  } else {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
});

module.exports = app;
