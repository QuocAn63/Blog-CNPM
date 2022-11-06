let mongoose = require('mongoose')

const userMetaSchema = new mongoose.Schema({
        userId: {
            type: mongoose.Schema.Types.Mixed,
            ref: 'user'
        },
        posts: [{
            type: mongoose.Schema.Types.Mixed,
            ref: 'post'
        }],
        questions: [{
            type: mongoose.Schema.Types.Mixed,
            ref: 'question'
        }],
        // Users who followed this user
        followers: [{
            type: mongoose.Schema.Types.Mixed,
            ref: 'user'   
        }],
        // Users who were followed by this user
        followings: [{
            type: mongoose.Schema.Types.Mixed,
            ref: 'user'   
        }],
})

module.exports = mongoose.model('userMeta',userMetaSchema)