const Resources = require('./model')

const validateResource = async (req, res, next) => {
    try {
        const name = req.body.resource_name
        const resources = await Resources.get()
        resources.map( each => {
            if(each.resource_name === name){
                next({ status: 400, message: " resource_name must be unique" })
            } 
        })
        !name ? next({ status: 400, message: " resource_name is required" }) : next()
        
    } catch (err) {
        next(err)
    }
}

module.exports = { validateResource }