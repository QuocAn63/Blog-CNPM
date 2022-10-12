import React from 'react'
import { Link } from 'react-router-dom'

import Image from '~/components/Image'

const PostItem = ({ data }) => (
    <Link to={'/post/' + data.POST_ID} className='block py-2 pt-2 pl-4 border-b border-slate-300'>
        <div className='truncate font-bold leading-3'>{data.TITLE}</div>
        <div className='meta'>
            <span className='flex items-center w-full'>{data.AUTHOR} </span>
            <span>
                đã đăng vào
                <span> {data.PUBLISHED_AT}</span>
            </span>
        </div>
        <div className='suggest'>
            {data.SUGGEST}
        </div>
    </Link>
)


const AuthorItem = ({ data }) => (
    <Link to={'/user/' + data.ID} className="block py-2 pt-2 pl-4 border-b border-slate-300">
        <Image className="avatar" src={data.IMAGE} />
        <div className='information'>
            <div className='truncate font-bold leading-3'>{data.TITLE}</div>
            <div className='meta'>
                Số bài viết:
                <span> {data.POSTS_COUNT}</span>
            </div>
        </div>

    </Link>
)

const TagItem = ({ data }) => (
    <Link to={'/tag/' + data.ID} className='block py-2 pt-2 pl-4 border-b border-slate-300'>
        <div className='information'>
            <div className='truncate font-bold leading-3'>{data.TITLE}</div>
            <div className='meta'>
                Số bài viết:
                <span> {data.POSTS_COUNT}</span>
            </div>
        </div>

    </Link>
)

function ResultItem({ data, type }) {
    let Comp;

    switch (type) {
        case 'POSTS':
            Comp = PostItem
            break;
        case 'AUTHORS':
            Comp = AuthorItem
            break;
        case 'TAGS':
            Comp = TagItem
            break;
        default: return
    }

    return (
        <Comp data={data} />
    )
}

export default ResultItem