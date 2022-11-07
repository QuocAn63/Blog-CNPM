let mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    user: [{
        type: mongoose.Schema.Types.Mixed,
        ref: 'user'
    }],
    title: {
        type: String,
        minLength: 10,
        maxLength: 155,
        required: true
    },

    slug: {
        type: String,
        required: true
    },

    content: {
        type: String,
        minLength: 255,
        required: true
    },
    tags: [{
        type: mongoose.Schema.Types.Mixed,
        ref: 'tag'
    }],
    upvote: [{
        type: mongoose.Schema.Types.Mixed,
        ref: 'user'
    }],
    downvote: [{
        type: mongoose.Schema.Types.Mixed,
        ref: 'user'
    }],

    comments: [{
        type: mongoose.Schema.Types.Mixed,
        ref: 'comment'
    }],

    publishedAt: {
        type: Date,
        default: Date.now
    },

    status: {
        type: String,
        enum: ['available', 'hidden', 'deleted']
    }

}, {timestamps: true})

module.exports = mongoose.model('post',postSchema)