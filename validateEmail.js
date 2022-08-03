const validateEmail = (req, res) => {
        const { email } = req.body;

        if (!email) {
          return res.status(400).json({ message: 'O campo "email" é obrigatório' });
        }
        if (!(email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))) {
         return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
        }
};

const validatePassword = (req, res) => {
        const { password } = req.body;
        if (!password) {
          return res.status(400).json({ message: 'O campo "password" é obrigatório' });
        }
        
        if (password.length < 6) {
          return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
        }
};

module.exports = {
    validateEmail,
    validatePassword,
};