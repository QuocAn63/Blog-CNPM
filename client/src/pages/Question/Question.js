import React from 'react'
import Banner from '~/components/Banner'
import { PostSidebar } from '~/components/Sidebar'
import FakeData from '~/FakeData'
import QuestionDetail from './QuestionDetail'

function Question() {
    return (
        <div className="max-w-screen-sm xl:max-w-screen-xl m-auto">
            <Banner src="" />
            <div className="py-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 xl:col-span-9 pr-5">
                        <QuestionDetail {...FakeData.Posts.singlePost} />
                    </div>
                    <div className="hidden xl:block col-span-3">
                        <PostSidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question