const { EventEmitter } = require('events');

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
}

const db = new Database();

module.exports = db;
