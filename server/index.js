const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const PORT = 3000;
const axios = require('axios');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('/courseContent', (req, res) => {

  // console.log(req.headers);
  axios.get('http://127.0.0.1:9800/content/item', {
    params: req.query,
    headers: req.headers
  })
    .then((response) => {
      // console.log(response.dat);
      res.send(response.data);
    });
  // res.send('sent');

});

app.listen(PORT, () => {
  console.log('Listening on port:', PORT);
});