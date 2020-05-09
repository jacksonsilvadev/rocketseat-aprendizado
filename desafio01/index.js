const express = require('express')
const server = express()

const projects = []

server.post('/projects',(req, res) => {
  const data = req.body
  projects.push(projects)
  return res.json(projects)
})

server.get('/projects', (req, res) => {
  return res.json(projects)
})

server.put('/projects/:id', (req, res) => {
  const id = req.params.id
  const index = projects.findIndex(p => {
    return p.id === id
  })

  projects[index] = req.body

  return res.json(projects)
})

server.delete('/projects/:id', (req, res) => {
  const id = req.params.id
  const index = projects.findIndex(p => {
    return p.id === id
  })
  projects.splice(index,1)

  return res.json(projects)
})

server.post('/projects/:id/tasks', (req, res) => {
  const id = req.params.id
  const index = projects.findIndex(p => {
    return p.id === id
  })
  projects[index].tasks.push(req.body)
})

server.listen(3000)