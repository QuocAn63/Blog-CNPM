# Database Model Design for Forum Website

## I. Database: MongoDB ( NoSQL )
## II. Schema List:
1. User:
   - User ( Author ) - user
   - User Detail - userDetail
   - User Meta Data - userMeta
2. Post:
   - Post - post
3. Question:
   - Question - question
4. Comment:
   - Comment - comment
5. Tag:
   - Tag - tag
6. Notification:
   - Notification - notification
7. Role
   - Role - role

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
        timeStamp: true
    } 
    ```

2. User Detail - userDetail

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
        },
        gender: {
            type: String,
            enum: ['male', 'female', 'other']
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
        ,
        comments: [{
            type: ObjectId,
            ref: comment
        }],
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

5. Question - question
    ``` javascript
    question: {
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
        ,
        comments: [{
            type: ObjectId,
            ref: comment
        }],
        solveld: {
            type: Boolean,
            default: false
        }
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

6. Comment - comment
    ``` javascript 
    comment: {
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
        timeStamp: true 
    }
    ```

7. Tag - tag
    ``` javascript 
    tag: {
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
        timeStamp: true 
    }
    ```

8. Notification - notification
    ``` javascript 
    notification: {
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
        timeStamp: true
    }
    ```

9. Role - role
    ``` javascript
    // 3 roles default: user, mod, admin 
    role: [{
        _id: {
            type: ObjectId
        },
        name: {
            type: String,
            required: true
        },
        users: [{
            type: ObjectId,
            ref: user
        }]
    }]
    ```