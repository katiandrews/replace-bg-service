const http = require('http');
const express = require('express');
const { PORT } = require('./config');
const api = require('./controllers');

const app = express();
app.use(express.json());

const server = http.createServer(app);

app.post('/upload', api.uploadImg);

app.get('/list', api.getImages);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
