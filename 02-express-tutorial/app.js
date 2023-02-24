const express = require('express');

const path = require('path');

const app = express();

app.use(express.static('./public'));

// Adding below index.html into static resources folder(public). The app still runs because the index.html browser will pick automatically
/*app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});*/

app.all('*', (req, res) => {
  console.log(path);
  res.status(404).send('<h1>Resource Not Found</h1>');
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
