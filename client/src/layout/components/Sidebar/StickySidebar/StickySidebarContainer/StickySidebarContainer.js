import React from 'react';
import { Link } from 'react-router-dom';
import { PostSidebarItem, AuthorSidebarItem } from '../StickySidebarItem';
import styles from './StickySidebarContainer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function StickySidebarContainer({ title, data }) {
   let Comp = '';

   // eslint-disable-next-line default-case
   switch (data.type) {
      case 'post':
         Comp = PostSidebarItem;
         break;
      case 'author':
         Comp = AuthorSidebarItem;
         break;
   }

   return (
      <div className={cx('wrapper')}>
         <div className="flex w-full gap-2 items-center">
            <Link
               to="/post/newest"
               className="block flex-shrink-0 uppercase text-sky-600 hover:text-sky-800 hover:underline"
            >
               {title}
            </Link>
            <div className="h-[1px] bg-gray-200 w-full"></div>
         </div>
         <div>
            {data.list.map((item, index) => (
               <Comp data={item} key={index} />
            ))}
         </div>
      </div>
   );
}

export default StickySidebarContainer;
