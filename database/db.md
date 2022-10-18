# Database Model Design

## I. Database: MongoDB ( NoSQL )
## II. Schema List:
1. User:
   - User ( Author ) - user
   - User Detail - userDetail
   - User Meta Data - userMeta
2. Post:
   - Post - post
   - Post Meta Data - postMeta
3. Question:
   - Question - question
   - Question Meta Data - questionMeta
4. Comment:
   - Comment - comment

## III. Schema Design:

1. User ( Author ) - user
``` javascript
user: {
    _id: {
        type: ObjectId
    },
    username: {
        type: String,
        minLength: 10,
        maxLength: 20,
        required: true
    },
    password: {
        type: String,
        minLength: 10,
        maxLength: 25,
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
    role: [{
        type: String,
        enum: ['user', 'admin']
    }],
    timeStamp : true
}
```

2. User Informations - userDetail
``` javascript
userDetail: {
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
    }
}
```

3. User Meta Data - userMeta
``` javascript
userMeta: {
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
}
```

4. Post - post
``` javascript
post: {
    _id: {
        type: ObjectId
    },
    author: [{
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
    publishedAt: {
        type: Date,
        default: timeStamp
    },
    status: {
        type: String,
        enum: ['available', 'hidden', 'deleted']
    }
    timeStamp : true
}
```

4. Post Meta Data - postMeta
``` javascript
postMeta: {
    _id: {
        type: ObjectId
    },
    postId: {
        type: ObjectId,
        ref: post
    },
    upvote: [{
        type: ObjectId,
        ref: user
    }],
    downvote: [{
        type: ObjectId,
        ref: user
    }],
    ,
    comments: [{
        type: ObjectId,
        ref: comment
    }]
}
```