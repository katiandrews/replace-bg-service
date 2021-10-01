const { EventEmitter } = require('events');
const { unlink } = require('fs/promises');

class Database extends EventEmitter {
  constructor() {
    super();
    this.idToImg = {};
  }

  insert(img) {
    this.idToImg[img.id] = img;
  }

  find() {
    const allImages = Object.values(this.idToImg);
    return allImages;
  }

  async deleteOne(id, filepath) {
    await unlink(filepath);
    delete this.idToImg[id];
  }
}

const db = new Database();

module.exports = db;
