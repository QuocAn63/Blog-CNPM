import React from 'react';
import PostDetail from './PostDetail';
import FakeData from '~/FakeData';
import { PostSidebar } from '~/components/Sidebar';

function Post() {
   return (
      <div className="py-10">
         <div className="grid grid-cols-12">
            <div className="col-span-12 xl:col-span-9 pr-5">
               <PostDetail {...FakeData.Posts.singlePost} />
            </div>
            <div className="hidden xl:block col-span-3">
               <PostSidebar />
            </div>
         </div>
      </div>
   );
}

export default Post;
