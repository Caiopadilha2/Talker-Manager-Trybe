const validateHasTalk = (req, res, next) => {
    try {
        const { talk } = req.body;
        if (!talk) {
          return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
        }
        if (!talk.watchedAt) {
          return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
        }
        if (talk.rate === undefined) {
            return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
          }
        return next();
       } catch (err) {
        return next(err);
       }    
};

module.exports = { validateHasTalk };