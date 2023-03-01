const express = require('express');

const app = express();
const logger = require('./logger');

app.get('/', logger, (req, res) => {
  res.send('Home Page');
});
app.get('/about', logger, (req, res) => {
  res.send(' About Page');
});
app.get('/url', logger, (req, res) => {
  res.send('URL Page');
});
app.get('/contact', logger, (req, res) => {
  res.send('Contact Page');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
