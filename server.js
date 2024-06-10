// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

let tasks = [];

// Endpoint to get tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Endpoint to add a new task
app.post('/tasks', (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.status(201).json(task);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
