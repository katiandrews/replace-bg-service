const upload = require('../utils/createStorage');
const db = require('../entities/Database');
const Img = require('../entities/Img');

module.exports = async (req, res) => {
  upload.single('image')(req, res, function (err) {
    try {
      if (err) {
        return res.status(400).end(err.message);
      }
      if (!req.file) {
        throw new Error('You should upload the file');
      }
      const jpegImg = new Img(req.file.filename, req.file.size);
      db.insert(jpegImg);

      res.end(jpegImg.id);
    } catch (error) {
      return res.status(400).end(error.message);
    }
  });
};
