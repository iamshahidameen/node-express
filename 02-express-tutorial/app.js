const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('Resource Requested on Homepage');
  res.send('<h1>This is my Homepage</h1>');
});
app.get('/contact', (req, res) => {
  console.log('Resource Requested on Contact Page');
  res.send('<h1>This is my Contact Page</h1>');
});
app.get('/about', (req, res) => {
  console.log('Resource Requested on About Page');
  res.send('<h1>This is my About Page</h1>');
});

app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found</h1>');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
