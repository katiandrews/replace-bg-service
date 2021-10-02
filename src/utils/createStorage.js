const multer = require('multer');
const path = require('path');
const { generateId } = require('./generateId');
const { imgFolder } = require('../config/index');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imgFolder);
  },
  filename: (req, file, cb) => {
    cb(null, `${generateId()}${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else if (file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('File format should be JPEG or PNG'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});
module.exports = upload;
