const validateAge = (req, res, next) => {
    try {
        const { age } = req.body;
        const maiorIdade = 18;
        if (!age) {
          return res.status(400).json({ message: 'O campo "age" é obrigatório' });
        }
        if (Number(age) < maiorIdade) {
          return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
        }
        return next();
       } catch (err) {
        return next(err);
       }    
};

module.exports = { validateAge };