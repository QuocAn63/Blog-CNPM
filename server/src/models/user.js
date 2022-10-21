let mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id: {
        type: ObjectId
    },
    username: {
        type: String,
        minLength: 10,
        maxLength: 20,
        required: true
    },
    password: {
        type: String,
        minLength: 10,
        maxLength: 25,
        required: true
    },
    avatar: {
        type: String,
        default: 'default-user.png'
    },
    status: {
        type: String,
        enum: ['active', 'disabled'],
        default: 'active'
    },
}, {timeStamp: true})

module.exports = mongoose.model('user',userSchema)