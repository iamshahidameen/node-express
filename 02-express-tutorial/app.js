const express = require('express');

const app = express();
const logger = require('./logger');

const authorize = require('./authorize');

app.use('/', [authorize, logger], (req, res) => {
  res.send('Home');
});
app.get('/', (req, res) => {
  res.send('Home Page');
});
app.get('/about', (req, res) => {
  res.send(' About Page');
});
app.get('/url', (req, res) => {
  res.send('URL Page');
});
app.get('/contact', (req, res) => {
  res.send('Contact Page');
});
app.get('/api/products', (req, res) => {
  res.send('Products Listing Page');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
