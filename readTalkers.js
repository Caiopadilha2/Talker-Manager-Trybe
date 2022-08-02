const fs = require('fs').promises;

const fileName = 'talker.json';

const readTalkers = async (_req, res, next) => {
  try {
    const data = await fs.readFile(fileName, 'utf8');
    const talkers = JSON.parse(data);
    if (!talkers) {
      return res.status(200).send([]);
    }
    return res.status(200).send(talkers);
   } catch (err) {
    return next(err);
   }    
};

module.exports = { readTalkers };