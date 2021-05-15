const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
// const cors = require('cors');
const PORT = 3000;
const axios = require('axios');

app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')));

app.use('/content', (req, res) => {

  

});

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});