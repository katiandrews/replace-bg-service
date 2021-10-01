const path = require('path');
const dbFolder = path.resolve('db');
const imgFolder = path.resolve(dbFolder, 'img');

module.exports = {
  PORT: 8080,

  dbFolder,
  imgFolder,
};
