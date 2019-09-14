const express = require('express');
const stringsRouter = require('./routes/strings');
const numberRouter = require('./routes/numbers');

const app = express();

app.use(express.json());
app.use('/strings', stringsRouter);
app.use('/numbers', numberRouter);

module.exports = app;
