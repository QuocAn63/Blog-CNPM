import PropTypes from 'prop-types'

import styles from './PostContainer.module.scss'
import classNames from 'classnames/bind'
import PostItem from '../PostItem'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const fakeData = [{

}]

function PostContainer({ data }) {
    return (
        <div className={cx('container') + " relative bg-white border border-slate-200 shadow rounded pt-10 py-5"}>
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <span className='absolute top-0 left-4 -translate-y-1/2 leading-5 bg-white px-2 font-bold uppercase text-xl text-slate-700'>Bài viết mới</span>
            <div className="text-center mt-2">
                <Link to="/p/newest" className="hover:text-sky-800 hover:underline text-sky-600 font-bold text-lg" >Xem thêm</Link>
            </div>
        </div>
    )
}

export default PostContainer