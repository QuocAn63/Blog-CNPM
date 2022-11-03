import React, { memo } from 'react';
import MetaItem from '~/components/MetaItem';
import { StickySidebar } from '~/layout/components/Sidebar';
import styles from './PostControllerSidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PostControllerSidebar({ points, isUpvoted, isDownvoted, bookmark = false, report = false, ...props }) {
   return (
      <StickySidebar
         offsetTop={64}
         render={() => (
            <div className="px-5 py-2">
               <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center">
                     <MetaItem
                        title="upvote"
                        className={(isUpvoted ? cx('voted') : '') + ' text-4xl'}
                        onClick={() => {
                           alert('upvote');
                        }}
                        placement="right"
                     />
                     <span className={(isUpvoted || isDownvoted ? cx('voted') : '') + ' py-1 text-4xl text-gray-500'}>
                        {points}
                     </span>
                     <MetaItem
                        title="downvote"
                        className={(isDownvoted ? cx('voted') : '') + ' text-4xl'}
                        onClick={() => {
                           alert('upvote');
                        }}
                        placement="right"
                     />
                  </div>
                  <div className="mt-8 flex flex-col items-center gap-5">
                     {bookmark && (
                        <MetaItem
                           title="bookmarks"
                           placement="right"
                           className="flex items-center justify-center text-xl border-2 text-gray-400 border-gray-400 rounded-full hover:text-sky-600 hover:border-sky-600 w-10 h-10"
                           onClick={() => {
                              alert('Bookmarks');
                           }}
                        />
                     )}
                     {report && (
                        <MetaItem
                           title="report"
                           placement="right"
                           className="flex items-center justify-center border-2 text-gray-400 border-gray-400 rounded-full hover:text-red-500 hover:border-red-500 w-8 h-8"
                           onClick={() => {
                              alert('Report');
                           }}
                        />
                     )}
                  </div>
               </div>
            </div>
         )}
      />
   );
}

export default memo(PostControllerSidebar);
