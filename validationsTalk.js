const validationsTalk = (req, res, next) => {
    try {
        const { talk } = req.body;
        const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;

        if (talk.rate < 1 || talk.rate > 5) {
          return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
        }
        if (!dateRegex.test(talk.watchedAt)) {
           return res.status(400).json({
             message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
        }
        return next();
       } catch (err) {
        return next(err);
       }    
};

module.exports = { validationsTalk };