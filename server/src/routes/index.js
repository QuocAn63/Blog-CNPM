const siteRouter = require('./site');

function route(app) {
    app.use('/', siteRouter); // '/' needs to be in the last row
}

module.exports = route;
