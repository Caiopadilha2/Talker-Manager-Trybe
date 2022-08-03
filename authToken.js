const authToken = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
          return res.status(401).json({ message: 'Token não encontrado' });
        }
        if (authorization.length !== 16) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        return next();
       } catch (err) {
        return next(err);
       }    
};

module.exports = { authToken };