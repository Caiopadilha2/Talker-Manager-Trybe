const fileName = 'talker.json';
const fs = require('fs').promises;

const searchTalker = async (req, res) => {
    const data = await fs.readFile(fileName, 'utf8');
    const talkers = JSON.parse(data);
    const { q } = req.query;
    if (!q) {
      return res.status(200).json(talkers);
    }
    const filteredTalkers = talkers.filter((talker) => talker.name
    .includes(q));
    return res.status(200).json(filteredTalkers);
};

module.exports = { searchTalker };