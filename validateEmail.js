// const validateEmail = (req, res, next) => {
//     try {
//       const { email } = req.body;

//       if (!email) {
//         return res.status(400).json({ message: 'O campo "email" é obrigatório' });
//       }
//       if (!(email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))) {
//        return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
//       }
//       return next();
//     } catch (err) {
//       return next(err);
//     }
// };

// module.exports = {
//   validateEmail,
// };