const express = require('express');

const app = express();
const logger = require('./logger');

app.get('/', logger, (req, res) => {
  res.send('Home Page');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
