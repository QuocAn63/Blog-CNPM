import PropTypes from 'prop-types';

import styles from './HomePostContainer.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function HomePostContainer({ list, title, Component }) {
   return (
      <div className={cx('container') + ' bg-white border border-slate-200 shadow rounded py-5'}>
         <Link
            to="/p/newest"
            className="hover:text-sky-700 inline-block leading-5 bg-white pt-2 pb-4 px-2 font-bold uppercase text-xl text-slate-700"
         >
            {title}
         </Link>
         {list.map((item, index) => (
            <Component key={index} {...item} />
         ))}
         <div className="text-center mt-2">
            <Link to="/p/newest" className="hover:text-sky-800 hover:underline text-sky-600 font-bold text-lg">
               Xem thêm
            </Link>
         </div>
      </div>
   );
}

export default HomePostContainer;
