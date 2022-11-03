const path = require('path');
const morgan = require('morgan');
const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser')

const route = require('./src/routes');
const db = require('./src/config/dbConnector');
require('dotenv').config();

const app = express();

//Connect to DB
db.connect();

app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))
app.use(cors())


const appRouter = new route(app)
appRouter.apiRouter()

app.listen(process.env.PORT, (req, res) => {
    console.log('App is running on port ' + process.env.PORT)
})
