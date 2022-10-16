import PropTypes from 'prop-types'
import styles from './PostItem.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import Image from '../Image'
import Tag from '../Tag'
import MetaItem from '../MetaItem'

const cx = classNames.bind(styles)

const fakeAuthor = {
    username: "caoquocan",
    fullname: "Cao Quoc An",
    avatar: "",
}

const fakeAuthorMetaData = {
    vote: 100,
    post: 100,
    followers: 100
}

const fakePost = {
    title: "Cấu hình cụm Kubernetes để sử dụng Nvidia GPU",
    slug: "cau-hinh-cum-kubernetes-de-su-dung-nvidia-gpu-PwlVmyaEV5Z",
}

const fakePostMetaData = {
    time: "thg 10 3, 10:07 SA",
    meta: {
        bookmarks: 0,
        comments: 0,
    },
    points: 0,
    tags: [{ title: "Content Creator", slug: "content-creator" }, { title: "attention", slug: "attention" }]
}

function PostItem({ post, author, type }) {
    const meta = Object.keys(fakePostMetaData.meta).map(meta => ({
        title: meta,
        value: fakePostMetaData.meta[meta]
    }))

    return (
        <div className={cx('wrapper') + " px-2 py-4"}>
            <div className="flex items-start w-full gap-4">
                <div>
                    <Link to={"/author/" + fakeAuthor.username}>
                        <Image src={fakeAuthor.avatar} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                    </Link>
                </div>
                <div className="flex-1">
                    <div>
                        <Link className="text-sky-600 hover:underline text-sm hover:text-sky-800" >{fakeAuthor.fullname}</Link>
                        <span className="ml-2 text-slate-500 text-sm">{fakePostMetaData.time}</span>
                    </div>
                    <div className="flex items-center gap-4 flex-wrap">
                        <Link to={fakePost.slug} className="block text-lg font-medium shrink-0 hover:text-sky-600">{fakePost.title}</Link>
                        <div className="flex items-center gap-2">
                            {
                                fakePostMetaData.tags.map((tag, index) => <Tag title={tag.title} slug={tag.slug} key={index} />)
                            }
                        </div>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                        <div className='flex items-center gap-4'>
                            {meta.map((item, index) => <MetaItem key={index} title={item.title} content={item.value} />)}
                        </div>
                        <MetaItem title={'points'} content={fakePostMetaData.points} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostItem