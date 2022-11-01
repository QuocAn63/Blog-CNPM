const express = require('express')
const userRouter = require('./user')
// const authRouter = require('./auth')
// const postRouter = require('./post')
// const tagRouter = require('./tag')
const app = express()

app.use('/user', userRouter)
// app.use('/auth', authRouter)
// app.use('/post', postRouter)
// app.use('/tag', tagRouter)
module.exports = app