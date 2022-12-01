import React from 'react';
import MetaItem from '~/components/MetaItem';
import { PostContainer } from '~/components/PostContainer';
import { SeriesItem } from '~/components/PostItem';
import { TagContainer } from '~/components/Tag';
import fakeData from '~/FakeData';
import { useMarkupHTML } from '~/hooks';
import PostControllerSidebar from '~/layout/components/PostControllerSidebar';

function SeriesDetail(props) {
   const { title, content, tags, bookmarks, comments, publishedAt } = props;
   const htmlContent = useMarkupHTML(content)

   return (
      <div className="flex">
         <div className="right-full top-0 bottom-0">
            <PostControllerSidebar {...props} bookmark report />
         </div>
         <div className="bg-white rounded shadow p-5">
            <div className="pb-5">
               <p className="text-sm text-gray-500">{publishedAt}</p>
               <div className="flex gap-5 mt-2">
                  <MetaItem title="bookmarks" content={bookmarks} large />
                  <MetaItem title="comments" content={comments} large />
                  <MetaItem title="posts" content={0} large />
               </div>
            </div>
            <div className="pb-5">
               <TagContainer tags={tags} />
            </div>
            <div className="mb-3">
               <p className="font-bold text-2xl">{title}</p>
            </div>
            <div className="py-5">
               <div dangerouslySetInnerHTML={htmlContent}></div>
            </div>
            <div className="py-5">
               <div className="flex items-center"><p className="font-bold uppercase text-large">Nội dung</p><div className="ml-3 flex-1 h-[1px] bg-gray-200"></div></div>
               <PostContainer list={fakeData.Posts.posts} Component={SeriesItem} pagination={false} />
            </div>
         </div>
      </div>
   );
}

export default SeriesDetail;
