import React, { memo } from 'react';

import styles from './Author.module.scss';
import classNames from 'classnames/bind';
import MetaItem from '~/components/MetaItem';
import UserSidebar from '~/components/Sidebar/UserSidebar';

const cx = classNames.bind(styles);

function AuthorSidebarItem({ data }) {
   const { author } = data;
   const meta = Object.keys(author.meta).map((key) => ({
      title: key,
      value: author.meta[key],
   }));

   return (
      <div className={cx('wrapper') + ' py-2'}>
         <UserSidebar {...author} />
         <div className="flex items-center gap-5 my-2">
            {meta.map((item, index) => (
               <MetaItem key={index} title={item.title} content={item.value} />
            ))}
         </div>
      </div>
   );
}

export default memo(AuthorSidebarItem);
