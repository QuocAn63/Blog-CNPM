let mongoose = require('mongoose')

const userDetailSchema = new mongoose.Schema({
    _id: {
        type: ObjectId
    },
    userId: {
        type: ObjectId,
        ref: user
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