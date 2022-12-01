import React from 'react';
import MetaItem from '~/components/MetaItem';
import { TagContainer } from '~/components/Tag';
import { useMarkupHTML } from '~/hooks';
import PostControllerSidebar from '~/layout/components/PostControllerSidebar';

function PostDetail(props) {
   const { title, content, tags } = props;
   const htmlContent = useMarkupHTML(content)

   return (
      <div className="flex">
         <div className="h-full">
            <PostControllerSidebar {...props} bookmark report />
         </div>
         <div className="bg-white rounded shadow p-5 w-full">
            <div className="pb-8">
               <p className="text-sm text-gray-500">Đã đăng vào khoảng 15 giờ trước</p>
               <div className="flex gap-5 mt-2">
                  <MetaItem title="comments" content="0" large />
                  <MetaItem title="bookmarks" content="0" large />
               </div>
            </div>
            <div className="mb-3">
               <p className="font-bold text-4xl">{title}</p>
            </div>
            <div className="py-5">
               <div dangerouslySetInnerHTML={htmlContent}></div>
            </div>
            <div className="py-5">
               <TagContainer tags={tags} />
            </div>
         </div>
      </div>
   );
}

export default PostDetail;
