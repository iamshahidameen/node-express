const express = require('express');

const app = express();

const { products } = require('./data');

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1> <a href="/api/products">Go to Products</a>');
});
app.get('/api/products', (req, res) => {
  res.setHeader('content-type', 'text/html');
  const prodListing = products.map((prod) => {
    const { id } = prod;
    return { id };
  });

  res.send(
    prodListing.map((prod) => {
      const { id } = prod;
      return `<a href="${id}">${id}</a>`;
    })
  );
});

app.listen(5000, () => {
  console.log('App listening on port 5000...');
});
