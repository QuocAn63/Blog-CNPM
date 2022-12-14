import styles from './SeriesItem.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Image from '~/components/Image';
import { TagContainer } from '~/components/Tag';
import MetaItem from '~/components/MetaItem';
import { memo } from 'react';

const cx = classNames.bind(styles);

function PostItem(props) {
   const { title, slug, points, user, tags, bookmarks_count, comments_count, publishedAt } = props;

   return (
      <div className={cx('wrapper') + ' px-2 py-4 bg-white rounded shadow'}>
         <div className="flex items-start w-full gap-4">
            <div>
               <Link to={'/user/' + user.username}>
                  <Image
                     src={user.avatar}
                     className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
               </Link>
            </div>
            <div className="flex-1">
               <div>
                  <Link className="text-sky-600 hover:underline text-sm hover:text-sky-800">{user.fullname}</Link>
                  <span className="ml-2 text-slate-500 text-sm">{publishedAt}</span>
               </div>
               <div className="flex items-center gap-4 flex-wrap">
                  <Link to={'/s/' + slug} className="block text-lg font-medium shrink-0 hover:text-sky-600">
                     {title}
                  </Link>
                  <div className="flex items-center gap-2">
                     <TagContainer tags={tags} />
                  </div>
               </div>
               <div className="mt-1 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                     <MetaItem title="bookmarks" content={bookmarks_count} />
                     <MetaItem title="comments" content={comments_count} />
                     <MetaItem title="postsSeries" content={comments_count} />
                  </div>
                  <MetaItem title={'points'} content={points} />
               </div>
            </div>
         </div>
      </div>
   );
}

export default memo(PostItem);
