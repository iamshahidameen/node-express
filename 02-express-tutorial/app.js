const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const method = req.method;
  const url = req.url;
  const path = req.path;
  const date = new Date().getFullYear();

  console.log(method, url, path, date);
  res.send('Home Page');
});

app.listen(5000, () => {
  console.log('first express app listening on port 5000...');
});
