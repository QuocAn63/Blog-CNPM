import React from 'react';
import styles from './PostManagementMenuItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function PostManagementMenuItem({ title, icon, count = 0, parent, href, to, className, onClick, ...props }) {
   let Comp = 'div';
   let passProps = { onClick };

   if (href) {
      Comp = 'a';
      passProps.href = href;
   }
   if (to) {
      Comp = NavLink;
      passProps.to = to;
   }

   let classNames = cx('wrapper') + ' ' + className;

   return (
      <Comp className={(to ? (nav => (nav.isActive) ? (classNames + " " + cx("active")) : classNames) : classNames)} {...passProps}>
         <FontAwesomeIcon icon={icon} />
         <span className={cx('title')}>
            {title} ({count})
         </span>
         {parent && <FontAwesomeIcon icon={faAngleDown} className={cx('submenu_icon')} />}
      </Comp>
   );
}

export default PostManagementMenuItem;
