const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const route = require('./src/routes');
const db = require('./src/config/dbConnector');

//Connect to DB
db.connect();

app.use(express.json());

//HTTP logger
// app.use(morgan('combined'));


//Route inits
route(app);

    app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
