const express = require('express');
const bodyParser = require('body-parser');
const { readTalkers } = require('./readTalkers');
const { findTalkerById } = require('./findTalkerById');
// const { validateEmail } = require('./validateEmail');
// const { validatePassword } = require('./validatePassword');
const { generateToken } = require('./generateToken');
const { authToken } = require('./authToken');
const { validateName } = require('./validateName');
const { validateAge } = require('./validateAge');
const { validateHasTalk } = require('./validateHasTalk');
const { validationsTalk } = require('./validationsTalk');
const { createTalker } = require('./createTalker');

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

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!(email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))) {
   return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  
  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  return res.status(200).json({ token: generateToken() });
});

app.post('/talker',
 authToken,
 validateName,
 validateAge,
 validateHasTalk,
 validationsTalk, 
 createTalker);

app.listen(PORT, () => {
  console.log('Online');
});
