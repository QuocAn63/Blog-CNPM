import React from 'react';
import Banner from '~/components/Banner';
import PostDetail from './PostDetail';
import FakeData from '~/FakeData';
import { PostSidebar } from '~/components/Sidebar';

function Post() {
   return (
      <div className="max-w-screen-xl m-auto">
         <Banner src="" />
         <div className="py-10">
            <div className="grid grid-cols-12">
               <div className="col-span-9 pr-5">
                  <PostDetail {...FakeData.Posts.singlePost} />
               </div>
               <div className="col-span-3">
                  <PostSidebar />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Post;
