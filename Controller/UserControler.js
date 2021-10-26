const registerValidator = require('../validator/registerValidator')
module.exports = {
    login(req, res) {
        let name = req.body.name
        let email = req.body.email
        res.json({
            message: `welcome ${name},we connect ${email}`
        })
    },
    register(req, res) {
        let { name, email, password, confirmpassword } = req.body
        let validate = registerValidator({ name, email, password, confirmpassword })
        if (!validate.isValid) {
            res.status(400).json(validate.error)
        }
        else {
            res.status(200).json({
                message: "Every thing is Ok"
            })


        }
    }
}