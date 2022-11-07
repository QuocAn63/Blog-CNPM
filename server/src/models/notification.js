let mongoose = require('mongoose')

const notificationSchema = new mongoose.Schema({
    _id: {
        type: ObjectId
    },
    content: {
        type: String,
        required: true
    },
    sender: {
        type: ObjectId,
        ref: user
    },
    receiver: {
        type: ObjectId,
        ref: user
    },
    // type_name can be change later
    type: {
        type: String,
        enum: ['post_notification', 'question_notification', 'server_notification']
    },
    isRead: {
        type: Boolean,
        default: false
    },
}, {timestamps: true})

module.exports = mongoose.model('notification',notificationSchema)