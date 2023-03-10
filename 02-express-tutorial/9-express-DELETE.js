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
    return res.status(201).json({ success: true, person: name });
    //for Postman
    // res.status(201).json({ success: true, data: [...people, name] });
  }
});
app.post('/loginPage', (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).json(`Welcome ${name}`);
  } else {
    return res.status(401).json('Please provide credentials');
  }
});

app.put('/api/people/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `No person with id ${id}` });
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  console.log(id, name);

  res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});
