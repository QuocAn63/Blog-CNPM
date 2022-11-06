const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log("Connected to mongodb successfully")
    } catch (error) {
        console.log("Couldn't connect to Mongoose'")
    }
}

module.exports = { connect }