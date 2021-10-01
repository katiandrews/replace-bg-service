const http = require('http');
const express = require('express');
const { PORT } = require('./config');
const api = require('./controllers');

const app = express();
app.use(express.json());

const server = http.createServer(app);

app.get('/list', api.getImages);

app.post('/upload', api.uploadImg);

app.get('/image/:id', api.downloadImg);

app.delete('/image/:id', api.deleteImg);

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
