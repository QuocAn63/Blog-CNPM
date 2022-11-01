const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Blog-CNPM', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Connected to mongodb successfully")
    } catch (error) {
        console.log("Couldn't connect to Mongoose'")
    }
}

module.exports = { connect }