import React from 'react';
import styles from './QuestionItem.module.scss';
import classNames from 'classnames/bind';
import MetaItem from '~/components/MetaItem';
import { Link } from 'react-router-dom';
import { TagContainer } from '~/components/Tag';
import { memo } from 'react';

const cx = classNames.bind(styles);

function QuestionItem(props) {
   const { title, slug, points, user, tags, reply_count, comments_count, publishedAt, isSolved } = props;

   return (
      <div className={cx('wrapper') + ' px-2 py-4'}>
         <div className="flex items-center gap-10">
            <div>
               <div>
                  <MetaItem title="publishedAt" content={publishedAt} />
               </div>
               <div className="flex items-center gap-5 mt-1">
                  <MetaItem title="reply" content={reply_count} />
                  <MetaItem title="points" content={points} />
                  <MetaItem title="comments" content={comments_count} />
               </div>
            </div>
            <div className="flex-1">
               <div>
                  <Link
                     className="text-sky-600 hover:underline text-sm hover:text-sky-800"
                     to={`/author/${user.data.username}`}
                  >
                     {user.data.fullname}
                  </Link>
               </div>
               <div className="flex items-center gap-4 flex-wrap">
                  <Link to={`/question/${slug}`} className="block text-lg font-medium shrink-0 hover:text-sky-600">
                     {isSolved && <span className="text-green-800 font-bold">[SOLVED]</span>} {title}
                  </Link>
                  <div className="flex items-center gap-2">
                     <TagContainer tags={tags} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default memo(QuestionItem);
