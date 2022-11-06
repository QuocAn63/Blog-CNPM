let mongoose = require('mongoose')

const userDetailSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.Mixed,
        ref: 'user'
    },
    fullname: {
        type: String,
        minLength: 4,
        maxLength: 55,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other']
    }
})

module.exports = mongoose.model('userDetail',userDetailSchema)