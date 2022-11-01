const user = require('../models/user')

class UserController {

    index(req, res) {
        res.send('user info')
    }
}

module.exports = new UserController();