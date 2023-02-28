const express = require('express');

const app = express();

const { products } = require('./data');

app.get('/', (req, res) => {
  console.log(req);

  res.send('Home Page');
});
app.get('/api/products', (req, res) => {
  res.send('Products');
});
app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    return (sortedProducts = sortedProducts.slice(0, Number(limit)));
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('No products matched your search');
    return res.status(200).json({ success: true, data: [] });
  }
  console.log('search => ', search);
  console.log('sortedProducts => ', sortedProducts);
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
