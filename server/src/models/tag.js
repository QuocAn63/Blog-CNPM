let mongoose = require('mongoose')

const tagSchema = new mongoose.Schema({
    _id: {
        type: ObjectId,
    },
    title: {
        type: String,
        minLength: 3,
        maxLength: 20,
        required: true
    },
    slug: {
        type: String,
        minLength: 3,
        required: true
    },
    posts: [{
        type: ObjectId,
        ref: post
    }],
    questions: [{
        type: ObjectId,
        ref: question
    }],
}, {timeStamp: true})

module.exports = mongoose.model('tag',tagSchema)