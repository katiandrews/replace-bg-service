const { generateId } = require('../utils/generateId');
const path = require('path');
const fs = require('fs/promises');
const { imgFolder } = require('../config');

module.exports = class Img {
  constructor(id, size, createdAt) {
    this.id = id || generateId();
    this.size = size || 0;
    this.createdAt = createdAt || Date.now();
  }

  // async saveFile() {
  //   await fs.writeFile(path.resolve(imgFolder, this.originalFilename));
  // }

  toJSON() {
    return {
      id: this.id,
      size: this.size,
      createdAt: this.createdAt,
    };
  }
};
