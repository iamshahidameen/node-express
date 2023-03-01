const express = require('express');

const app = express();

let { people } = require('./data');

//Static Assets/Homepage
app.use(express.static('./methods-public'));
//parse form data
app.use(express.urlencoded({ extended: false }));
app.post('/loginPage', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  } else {
    return res.status(401).send('Please provide credentials');
  }
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
