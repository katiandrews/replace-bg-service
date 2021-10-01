const { generateId } = require('../utils/generateId');

module.exports = class Img {
  constructor(id, size, createdAt) {
    this.id = id || generateId();
    this.size = size || 0;
    this.createdAt = createdAt || new Date();
  }

  toJSON() {
    return {
      id: this.id,
      size: this.size,
      createdAt: this.createdAt,
    };
  }
};
