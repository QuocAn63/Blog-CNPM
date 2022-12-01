import React, { memo } from 'react';

import styles from './Author.module.scss';
import classNames from 'classnames/bind';
import MetaItem from '~/components/MetaItem';
import UserSidebar from '~/layout/components/Sidebar/UserSidebar';

const cx = classNames.bind(styles);

function AuthorSidebarItem({ ...props }) {

   return (
      <div className={cx('wrapper') + ' py-2'}>
         <UserSidebar {...props} />
         <div className="flex items-center gap-5 my-2">
            <MetaItem title="points" content={0} />
            <MetaItem title="followers" content={0} />
            <MetaItem title="posts" content={0} />
         </div>
      </div>
   );
}

export default memo(AuthorSidebarItem);
