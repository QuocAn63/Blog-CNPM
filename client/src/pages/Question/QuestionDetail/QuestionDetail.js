import React from 'react';
import MetaItem from '~/components/MetaItem';
import { TagContainer } from '~/components/Tag';
import PostControllerSidebar from '~/layout/components/PostControllerSidebar';

function createMarkup(content) {
   return { __html: content };
}

function QuestionDetail(props) {
   const { title, content, tags, bookmarks, replies, publishedAt } = props;

   return (
      <div className="flex">
         <div className="right-full top-0 bottom-0">
            <PostControllerSidebar {...props} />
         </div>
         <div className="bg-white rounded shadow p-5">
            <div className="pb-5">
               <p className="text-sm text-gray-500">{publishedAt}</p>
               <div className="flex gap-5 mt-2">
                  <MetaItem title="bookmarks" content={bookmarks} large />
                  <MetaItem title="reply" content={replies} large />
               </div>
            </div>
            <div className="mb-3">
               <p className="font-bold text-2xl">{title}</p>
            </div>
            <div className="pb-5">
               <TagContainer tags={tags} />
            </div>
            <div className="py-5">
               <div dangerouslySetInnerHTML={createMarkup(content)}></div>
            </div>
         </div>
      </div>
   );
}

export default QuestionDetail;
