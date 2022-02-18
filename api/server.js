const express = require('express')
const projectsRouter = require('./project/router')
const resourcesRouter = require('./resource/router')
const tasksRouter = require('./task/router')

const server = express()

server.use(express.json())

server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', tasksRouter)

server.use('*', (req, res) => {
    res.status(404).json({ message: `${req.method} ${req.baseUrl} is not a valid address`})
})

server.use((err, req, res, next) => {
    res.status(err.status || 500).json({message: ` Error: ${err.message}`})
})

module.exports = server;