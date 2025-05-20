const express = require('express')
const app = express()
const port = 1245

app.get('/', (req, res) => {
  res.send('Hello Holberton School!')
})

app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
