let mongoose = require('mongoose')

const roleSchema = new mongoose.Schema({
    _id: {
        type: ObjectId
    },
    name: {
        type: String,
        required: true
    },
    users: [{
        type: ObjectId,
        ref: user
    }]
})

module.exports = mongoose.model('role',roleSchema)