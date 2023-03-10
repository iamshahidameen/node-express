const express = require('express');

const app = express();

const { products } = require('./data');

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1> <a href="/api/products">Go to Products</a>');
});
app.get('/api/products', (req, res) => {
  const prodListing = products.map((prod) => {
    const { id, name } = prod;
    return { id, name };
  });

  res.send(prodListing);
});

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;
  console.log(productID);
  const singleProduct = products.find((prod) => {
    return prod.id === Number(productID);
  });

  if (!singleProduct) {
    return res.status(404).send('Product does not exist');
  }
  res.send(
    `<h1>${singleProduct.name}</h1> <img src="${singleProduct.image}" />`
  );
});
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params);
  res.send('Hello World');
});
app.listen(5000, () => {
  console.log('App listening on port 5000...');
});
