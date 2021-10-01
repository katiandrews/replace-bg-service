const path = require('path');
const db = require('../entities/Database');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json('Id should be provided');
    }

    const filepath = path.resolve('db/img/' + id);

    await db.deleteOne(id, filepath);

    return res.end(id);
  } catch (error) {
    return res.status(505);
  }
};
