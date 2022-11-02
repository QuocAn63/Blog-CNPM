import React from 'react'
import FakeData from '~/FakeData'
import QuestionDetail from './QuestionDetail'

function Question() {
    return (
        <QuestionDetail {...FakeData.Posts.singlePost} />

    )
}

export default Question