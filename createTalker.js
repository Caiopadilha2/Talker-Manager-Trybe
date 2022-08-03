const fileName = 'talker.json';
const fs = require('fs').promises;

const createTalker = async (req, res) => {
    const data = await fs.readFile(fileName, 'utf8');
    const talkers = JSON.parse(data);
    const id = talkers.length + 1;
    const newTalker = { id, ...req.body };
    talkers.push(newTalker);
    await fs.writeFile('talker.json', JSON.stringify(talkers));
    return res.status(201).json(newTalker);
};

module.exports = { createTalker };