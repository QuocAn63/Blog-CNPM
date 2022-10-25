let mongoose = require('mongoose')

const userMetaSchema = new mongoose.Schema({
        _id: {
            type: ObjectId
        },
        userId: {
            type: ObjectId,
            ref: user
        },
        posts: [{
            type: ObjectId,
            ref: post
        }],
        questions: [{
            type: ObjectId,
            ref: question
        }],
        // Users who followed this user
        followers: [{
            type: ObjectId,
            ref: user   
        }],
        // Users who were followed by this user
        followings: [{
            type: ObjectId,
            ref: user   
        }],
})

module.exports = mongoose.model('userMeta',userMetaSchema)