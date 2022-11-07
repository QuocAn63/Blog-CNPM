let mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 10,
        maxLength: 20,
        required: true
    },
    password: {
        type: String,
        minLength: 10,
        maxLength: 100,
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
}, {timestamps: true})

module.exports = mongoose.model('user',userSchema)