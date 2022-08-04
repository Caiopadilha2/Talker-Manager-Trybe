const express = require('express');
const bodyParser = require('body-parser');
const { readTalkers } = require('./readTalkers');
const { findTalkerById } = require('./findTalkerById');
// const { validateEmail } = require('./validateEmail');
// const { validatePassword } = require('./validatePassword');
// const { generateToken } = require('./generateToken');
const { authToken } = require('./authToken');
const { validateName } = require('./validateName');
const { validateAge } = require('./validateAge');
const { validateHasTalk } = require('./validateHasTalk');
const { validationsTalk } = require('./validationsTalk');
const { createTalker } = require('./createTalker');
const { editTalker } = require('./editTalker');
const { deleteTalker } = require('./deleteTalker');
const { validateLogin } = require('./validateLogin');
const { searchTalker } = require('./searchTalker');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', readTalkers);

app.get('/talker/search',
 authToken,
 searchTalker);

app.get('/talker/:id', findTalkerById);

app.post('/login', validateLogin);

app.post('/talker',
 authToken,
 validateName,
 validateAge,
 validateHasTalk,
 validationsTalk, 
 createTalker);

app.put('/talker/:id',
 authToken,
 validateName,
 validateAge,
 validateHasTalk,
 validationsTalk,
 editTalker);

app.delete('/talker/:id', 
authToken,
deleteTalker);

app.listen(PORT, () => {
  console.log('Online');
});
