let mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    _id: {
        type: ObjectId,
    },
    user: {
        type: ObjectId,
        ref: user
    },
    content: {
        type: String,
        minLength: 1,
        required: true
    },
    comments: [{
        type: ObjectId,
        ref: comment
    }],
    // add when comment is a question reply
    accepted: {
        type: Boolean,
        default: false
    },
}, {timeStamp: true})

module.exports = mongoose.model('comment',commentSchema)