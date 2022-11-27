import { faFlag } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Image from '~/components/Image';
import MetaItem from '~/components/MetaItem';
import { useMarkupHTML } from '~/hooks';

import styles from './CommentItem.module.scss';
import classNames from 'classnames/bind';
import CommentRoot from '../CommentRoot';

const cx = classNames.bind(styles);

function CommentItem(props) {
   const { user, content, publishedAt, answer = false, accepted = false, isUpvoted, isDownvoted } = props;
   const [isReplying, setIsReplying] = useState(false);
   const markedupContent = useMarkupHTML(content);

   return (
      <div className={cx('wrapper')}>
         <div className="flex items-center">
            <Link to={`/user/${user.data.username}`} className="inline-block mx-3">
               <Image src="" className="w-10 h-10 rounded-full" />
            </Link>
            <div className="text-sm leading-6">
               <div>
                  <Link
                     to={`/user/${user.data.username}`}
                     className="inline-block font-bold text-sky-600 hover:underline"
                  >
                     {user.data.fullname}
                     <span className="ml-2 text-gray-400">@{user.data.username}</span>
                  </Link>
                  {accepted && (
                     <span className="bg-green-800 text-white font-bold rounded-sm px-2 py-0.5 ml-2 cursor-pointer">
                        Đã được chấp nhận
                     </span>
                  )}
               </div>
               <div>
                  <span className="text-gray-400 mt-1">{publishedAt}</span>
               </div>
            </div>
         </div>
         <div className="my-5 flex">
            {answer && (
               <div className="flex flex-col items-center pr-4">
                  <MetaItem
                     title="upvote"
                     className="text-xl"
                     onClick={() => {
                        alert('Upvote answer');
                     }}
                  />
                  <span className="text-2xl text-gray-400 font-bold">0</span>
                  <MetaItem
                     title="downvote"
                     className="text-xl"
                     onClick={() => {
                        alert('Upvote answer');
                     }}
                  />
               </div>
            )}
            <div dangerouslySetInnerHTML={markedupContent}></div>
         </div>
         <div className="flex items-center">
            {!answer && (
               <>
                  <MetaItem
                     title="upvote"
                     content="0"
                     onClick={() => {
                        alert('Upvote Comment');
                     }}
                     className={(isUpvoted && "voted") + " mr-2"}
                  />
                  <MetaItem
                     title="downvote"
                     content="0"
                     onClick={() => {
                        alert('Downvote Comment');
                     }}
                     className={isDownvoted && "voted"}
                  />
                  <span className="w-[1px] h-4 bg-gray-400 inline-block mx-5"></span>
               </>
            )}
            <Button
               className="text-sm p-0 text-sky-600 hover:text-sky-700 hover:underline"
               onClick={() => setIsReplying(!isReplying)}
            >
               Trả lời
            </Button>
            <Button className="text-sm p-0 text-red-400 hover:text-red-600 hover:underline" leftIcon={faFlag}>
               Báo cáo
            </Button>
         </div>
         {isReplying && (
            <div className="mt-5">
               <CommentRoot onCancel={() => setIsReplying(false)} />
            </div>
         )}
      </div>
   );
}

export default CommentItem;
