const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 3000;

app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')), () => {
  console.log('request');
});

// app.get('/', express.static(path.join(__dirname, 'client', 'dist')))

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});