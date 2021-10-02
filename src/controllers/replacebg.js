const path = require('path');
const { createReadStream, createWriteStream } = require('fs');
const { imgFolder } = require('../config/index');
const { replaceBackground } = require('backrem');

module.exports = (req, res) => {
  try {
    let { front, back, color, threshold } = req.query;
    if (!front || !back) {
      return res
        .status(400)
        .json('You should provide id for front and back image');
    }
    if (color) color = color.split(',').map((num) => Number(num));
    if (threshold) threshold = Number(threshold);

    if (!path.resolve(imgFolder, front) || !path.resolve(imgFolder, back)) {
      return res.status(404).json('Images with provided id are not found');
    }
    const frontImage = createReadStream(path.resolve(imgFolder, front));
    const backImage = createReadStream(path.resolve(imgFolder, back));

    replaceBackground(frontImage, backImage, color, threshold).then(
      (readableStream) => {
        res.attachment(`${front}`);
        readableStream.pipe(res);
      }
    );
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
