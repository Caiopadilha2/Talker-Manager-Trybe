const fs = require('fs').promises;

const fileName = 'talker.json';

const findTalkerById = async (req, res, next) => {
  try {
    const data = await fs.readFile(fileName, 'utf8');
    const { id } = req.params;
    const talkers = JSON.parse(data);
    const foundById = talkers.find((talker) => (talker.id === Number(id)));
    if (!foundById) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    }
    return res.status(200).send(foundById);
   } catch (err) {
    return next(err);
   }    
};

module.exports = { findTalkerById };