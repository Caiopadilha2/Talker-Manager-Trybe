const express = require('express');
const bodyParser = require('body-parser');
const { readTalkers } = require('./readTalkers');
const { findTalkerById } = require('./findTalkerById');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', readTalkers);

app.get('/talker/:id', findTalkerById);

app.listen(PORT, () => {
  console.log('Online');
});