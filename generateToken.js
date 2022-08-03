const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

// const generateToken = (req, res, next) => {
//   try {
//     const token = crypto.randomBytes(8).toString('hex');
//     return res.status(200).send({ token });
//   } catch (err) {
//     return next(err);
//   }
// };

module.exports = { generateToken };