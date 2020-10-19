'use strict';

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(path.join(__dirname, '/build'))));

app.all('*', (req, res) => {
  res.sendFile('index.html', { root: path.resolve(path.join(__dirname, '/build')) });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});