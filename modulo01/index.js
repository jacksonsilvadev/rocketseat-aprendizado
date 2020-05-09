const express = require('express');
const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = { "name": "Jackson" }

const users = ['Diego', 'Claúdio', 'Voctpr']

// query
server.get('/users', (req, res) => {
  return res.json(users);
})

server.get('/users/:index', (req, res) => {
  const index = req.params.index
  return res.json(users[index]);
})

server.post('/users', (req, res) => {
  const { name } = req.body
  users.push(name)
  return res.json(users);
})

server.put('/users/:index', (req, res) => {
  const { index } = req.params
  const { name } = req.body

  return res.json(users);
})

server.listen(3000);