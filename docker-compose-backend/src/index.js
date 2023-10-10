// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Docker with Node.js!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
