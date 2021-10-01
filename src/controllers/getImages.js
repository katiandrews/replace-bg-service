const db = require('../entities/Database');

module.exports = (req, res) => {
  const allSvgs = db.find().map((img) => img.toJSON());
  return res.json(allSvgs);
};
