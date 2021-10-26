const validator = require('validator')

const validate = user => {
    let error = {}

    if (!user.name) {
        error.name = "please provide your name"
    }

    if (!user.email) {
        error.email = "please provide your email" //when    nothing   getting as email
    } else if (!validator.isEmail(user.email)) {
        error.email = 'please provide your email' // when  getting a mail   - verify  if it     valid
    }
    if (!user.password) {
        error.password = 'please provide your password'
    } else if (user.password.length < 6) {
        error.password = ('password must be Greater or Equal 6 charecrer')
    }

    if (!user.confirmpassword) {
        error.confirmpassword = 'please provide conformed password'
    } else if (user.password !== user.confirmpassword) {
        error.confirmpassword = 'password Doesn\t Match'
    }
    return {
        error,
        isValid: Object.keys(error).length == 0
    }
}
module.exports = validate