const express = require('express');

const app = express();

let { people } = require('./data');

//Static Assets/Homepage
app.use(express.static('./methods-public'));
//parse form data

//parse form data from JS fetch
app.use(express.json());

//Parse HTML Form Data
app.use(express.urlencoded({ extended: false }));
app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post('/api/people', (req, res) => {
  const { name } = req.body;
  console.log(name);
  if (!name) {
    return res
      .status(401)
      .json({ success: false, msg: 'Please provide name value' });
  } else {
    res.status(201).json({ success: true, person: name });
  }
});
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
