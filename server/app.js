const path = require('path');
const morgan = require('morgan');
const express = require('express');
const route = require('./src/routes');
const db = require('./src/config/dbConnector');
require('dotenv').config();

const app = express();

//Connect to DB
db.connect();

app.use(express.json());

const appRouter = new route(app)
appRouter.apiRouter()

app.listen(process.env.PORT, (req, res) => {
    console.log('App is running on port ' + process.env.PORT)
})
