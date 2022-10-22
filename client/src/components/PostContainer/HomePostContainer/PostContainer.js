import PropTypes from 'prop-types';

import styles from './PostContainer.module.scss';
import classNames from 'classnames/bind';
import PostItem from '../../PostItem/PostItem';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const fakeData = [{}];

function HomePostContainer({ data }) {
   return (
      <div className={cx('container') + ' bg-white border border-slate-200 shadow rounded py-5'}>
         <Link
            to="/p/newest"
            className="hover:text-sky-700 inline-block leading-5 bg-white pt-2 pb-4 px-2 font-bold uppercase text-xl text-slate-700"
         >
            Bài viết mới
         </Link>
         <PostItem />
         <PostItem />
         <PostItem />
         <PostItem />
         <PostItem />
         <div className="text-center mt-2">
            <Link to="/p/newest" className="hover:text-sky-800 hover:underline text-sky-600 font-bold text-lg">
               Xem thêm
            </Link>
         </div>
      </div>
   );
}

export default HomePostContainer;
