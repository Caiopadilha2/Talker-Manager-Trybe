const fileName = 'talker.json';
const fs = require('fs').promises;

const editTalker = async (req, res) => {
    const { id } = req.params;
    const data = await fs.readFile(fileName, 'utf8');
    const talkers = JSON.parse(data);
    const newInfos = req.body;
    const newTalkers = talkers.map((talker) => {
      if (talker.id === Number(id)) {
        return { ...talker, ...newInfos };
      }
      return talker;
    });

    await fs.writeFile('talker.json', JSON.stringify(newTalkers));
    return res.status(200).json(newTalkers.find((newTalker) => newTalker.id === Number(id)));
};

module.exports = { editTalker };