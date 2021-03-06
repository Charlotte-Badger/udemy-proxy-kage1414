const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const PORT = 5000;

app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')));

app.use(cors());

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});