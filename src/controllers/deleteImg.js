const path = require('path');
const { access, constants } = require('fs');
const db = require('../entities/Database');
const { imgFolder } = require('../config/index');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json('Id should be provided');
    }

    const filepath = path.resolve(imgFolder, id);

    access(filepath, constants.F_OK, (err) => {
      if (err) return res.status(404).json('File not found');
    });

    await db.deleteOne(id, filepath);

    return res.json({ id });
  } catch (error) {
    return res.status(505);
  }
};
