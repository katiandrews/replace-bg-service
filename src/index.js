const http = require('http');
const express = require('express');
const { PORT } = require('./config');

const app = express();
app.use(express.json());

const server = http.createServer(app);

app.post('/upload');

app.get('/list', (req, res) => {});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
