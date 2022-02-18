const router = require('express').Router()
const Projects = require('./model')
const { validateProject } = require('./project-middleware')

router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.get()
        res.json(projects) 
    } catch (err) {
        next(err)
    }
})

router.post('/', validateProject, async (req, res, next) => {
    try {
        const newProject = await Projects.create(req.body)
        res.json(newProject)
    } catch (err) {
        next(err)
    }
})

module.exports = router