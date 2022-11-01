import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './FeedBar.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Feedbar({ list, path, icon, title }) {
   return (
      <div className="bg-sky-900">
         <div className="max-w-screen-xl m-auto px-5">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-10 py-4">
                  {list.map((item, index) => (
                     <NavLink
                        to={item.path}
                        className={(nav) =>
                           nav.isActive
                              ? cx('link', 'active') + ' text-sm block py-2 text-white uppercase font-bold'
                              : cx('link') + ' text-sm block py-2 text-white uppercase font-bold'
                        }
                        key={index}
                     >
                        {item.name}
                     </NavLink>
                  ))}
               </div>
               <Button
                  leftIcon={icon}
                  small
                  to={path}
                  className="text-sm bg-sky-600 rounded text-white px-2 py-1 uppercase"
               >
                  {title}
               </Button>
            </div>
         </div>
      </div>
   );
}

Feedbar.propTypes = {
   list: PropTypes.array.isRequired,
   path: PropTypes.string,
   icon: PropTypes.object,
   title: PropTypes.string,
};

export default Feedbar;
