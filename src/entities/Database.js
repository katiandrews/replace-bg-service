const { EventEmitter } = require('events');

class Database extends EventEmitter {
  constructor() {
    super();
    this.idToImg = {};
  }

  insert(img) {
    this.idToImg[img.id] = img;
  }
}

const db = new Database();

module.exports = db;
