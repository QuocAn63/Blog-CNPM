import PropTypes from 'prop-types'

import styles from './PostContainer.module.scss'
import classNames from 'classnames/bind'
import PostItem from '../PostItem'

const cx = classNames.bind(styles)

const fakeData = [{

}]

function PostContainer({ data }) {
    return (
        <div className={cx('container') + " relative border border-slate-200 shadow rounded h-96 py-10"}>
            <PostItem />
            <PostItem />
            <span className='absolute top-0 left-4 -translate-y-1/2 leading-5 bg-white px-2 font-bold uppercase text-xl text-slate-700'>Bài viết mới</span>
        </div>
    )
}

export default PostContainer