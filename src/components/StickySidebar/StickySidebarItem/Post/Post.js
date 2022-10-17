import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import MetaItem from '~/components/MetaItem';

import styles from './Post.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PostSidebarItem({ data }) {
   const { post } = data;
   const meta = Object.keys(post.meta).map((key) => ({
      title: key,
      value: post.meta[key],
   }));

   return (
      <div className={cx('wrapper') + ' py-2'}>
         <Link to="/" className="hover:text-sky-600 break-words block leading-5">
            {post.title}
         </Link>
         <div class="flex items-center gap-5 my-2">
            {meta.map((item, index) => (
               <MetaItem key={index} title={item.title} content={item.value} />
            ))}
         </div>
         <Link to={'/author/' + post.author.username} className="text-sm text-gray-500 hover:text-gray-900">
            {post.author.fullname}
         </Link>
      </div>
   );
}

export default memo(PostSidebarItem);
