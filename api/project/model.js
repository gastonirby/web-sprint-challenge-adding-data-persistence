const db = require('../../data/dbConfig.js')

async function get() {
    const projects = await db("projects")
    const newArr = []
    projects.forEach(each => {
        each.project_completed === 0 ? newArr.push({...each, project_completed: false}) :
        newArr.push({...each, project_completed: true})
    });
    return newArr
}

async function getById(id) {
    const project = await db("projects").where("project_id", id).first()
    let completed = project.project_completed
    completed === 0 || !completed ? completed = false : completed = true
    return ({ ...project, project_completed: completed})
}

async function create(newProject) {
    const [project_id]  = await db("projects").insert(newProject)
    return getById(project_id)
}

module.exports = {
    get,
    getById,
    create
}