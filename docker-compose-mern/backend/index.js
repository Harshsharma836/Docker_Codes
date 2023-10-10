const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

// Allow requests from http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',
}));

app.get('/api', (req, res) => {
  res.send('Hello from Express.js backend!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
