const db = require('../../data/dbConfig.js')

function get() {
    return db("resources")
}

function getById(id) {
    return db("resources").where("resource_id", id).first()
}

async function create(newResource) {
    const [resource_id] = await db("resources").insert(newResource)
    return getById(resource_id)
}

module.exports = {
    get,
    getById,
    create
}