import React, { memo } from 'react';

import styles from './Author.module.scss';
import classNames from 'classnames/bind';
import MetaItem from '~/components/MetaItem';
import UserSidebar from '~/layout/components/Sidebar/UserSidebar';

const cx = classNames.bind(styles);

function AuthorSidebarItem({ data }) {
   const { user } = data;
   const meta = Object.keys(user.meta).map((key) => ({
      title: key,
      value: user.meta[key],
   }));

   return (
      <div className={cx('wrapper') + ' py-2'}>
         <UserSidebar {...user} />
         <div className="flex items-center gap-5 my-2">
            {meta.map((item, index) => (
               <MetaItem key={index} title={item.title} content={item.value} />
            ))}
         </div>
      </div>
   );
}

export default memo(AuthorSidebarItem);
