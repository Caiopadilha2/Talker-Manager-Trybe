const fileName = 'talker.json';
const fs = require('fs').promises;

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const data = await fs.readFile(fileName, 'utf8');
  const talkers = JSON.parse(data);
  const newTalkers = talkers.filter((talker) => talker.id !== Number(id));
  await fs.writeFile('talker.json', JSON.stringify(newTalkers));
  return res.status(204).end();
};

module.exports = { deleteTalker };