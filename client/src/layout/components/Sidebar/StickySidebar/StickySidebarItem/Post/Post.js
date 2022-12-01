import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import MetaItem from '~/components/MetaItem';

import styles from './Post.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PostSidebarItem({ ...props }) {
   const { post } = props;

   return (
      <div className={cx('wrapper') + ' py-2'}>
         <Link to={`/p/${post.slug}`} className="hover:text-sky-600 break-words block leading-5">
            {post.title}
         </Link>
         <div className="flex items-center gap-5 my-2">
            <MetaItem title="points" content={post.meta.points} />
            <MetaItem title="comments" content={post.meta.comments} />
            <MetaItem title="bookmarks" content={post.meta.bookmarks} />
         </div>
         <Link to={'/user/' + post.user.username} className="text-sm text-gray-500 hover:text-gray-900">
            {post.user.fullname}
         </Link>
      </div>
   );
}

export default memo(PostSidebarItem);
