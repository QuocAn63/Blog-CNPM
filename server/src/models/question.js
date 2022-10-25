let mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    _id: {
        type: ObjectId
    },
    user: [{
        type: ObjectId,
        ref: user
    }],
    title: {
        type: String,
        minLength: 10,
        maxLength: 155,
        required: true
    },
    content: {
        minLength: 255,
        required: true
    },
    tags: [{
        type: ObjectId,
        ref: tag
    }],
    upvote: [{
        type: ObjectId,
        ref: user
    }],
    downvote: [{
        type: ObjectId,
        ref: user
    }],

    comments: [{
        type: ObjectId,
        ref: comment
    }],
    solveld: {
        type: Boolean,
        default: false
    },

    publishedAt: {
        type: Date,
        default: timeStamp
    },
    status: {
        type: String,
        enum: ['available', 'hidden', 'deleted']
    },
}, {timeStamp: true})

module.exports = mongoose.model('question',questionSchema)