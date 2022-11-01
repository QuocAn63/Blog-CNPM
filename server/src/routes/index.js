const apiRouter = require('./api')

class appRoutes {
    constructor(app) {
        this.app = app
    }

    apiRouter() {
        this.app.use('/api', apiRouter)
    }
}

module.exports = appRoutes
