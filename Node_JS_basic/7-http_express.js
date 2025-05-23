const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const database = process.argv[2];
  console.log('Database path:', database);

  res.set('Content-Type', 'text/plain');

  try {
    const report = await countStudents(database);
    res.send(`This is the list of our students\n${report}`);
  } catch (err) {
    res.status(500).send('This is the list of our students\nCannot load the database');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
