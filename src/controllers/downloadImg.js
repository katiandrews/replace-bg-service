const path = require('path');
const { access, constants } = require('fs');

module.exports = (req, res) => {
  try {
    const { id } = req.params;
    if (
      !id ||
      (id.includes('.jpeg') === false && id.includes('.jpg') === false)
    ) {
      return res
        .status(400)
        .json('Filename should be provided and end with .jpg or .jpeg');
    }

    const filepath = path.resolve('db/img/' + id);

    access(filepath, constants.F_OK, (err) => {
      if (err) return res.status(404).json('File not found');
    });

    return res.download(filepath);
  } catch (error) {
    return res.status(505);
  }
};
