const Projects = require('./model')

const validateProject = async (req, res, next) => {
    try {
        const name = req.body.project_name
        !name ? next({ status: 400, message: " project_name is required" }) : next()
        
    } catch (err) {
        next(err)
    }
}

module.exports = { validateProject }