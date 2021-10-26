const router = require('express').Router()

const { login, register } = require("../Controller/UserControler")
// Resgistration
router.post('/register', register)


router.post('/login', login)
module.exports = router