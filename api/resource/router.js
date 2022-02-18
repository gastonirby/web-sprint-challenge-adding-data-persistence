const router = require('express').Router()
const Resources = require('./model')
const { validateResource } = require('./resource-middleware')

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resources.get()
        res.json(resources) 
    } catch (err) {
        next(err)
    }
})

router.post('/', validateResource, async (req, res, next) => {
    try {
        const newResource = await Resources.create(req.body)
        res.json(newResource)
    } catch (err) {
        next(err)
    }
})

module.exports = router