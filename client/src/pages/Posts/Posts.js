import React from 'react';
import Banner from '~/components/Banner';
import { FeedBar } from '~/components/Filter';
import { GlobalStickySidebar } from '~/components/StickySidebar';
import config from '~/config';
import { PostItem } from '~/components/PostItem';
import { PostContainer } from '~/components/PostContainer';

import FakeData from '~/FakeData';

function Posts() {
   return (
      <div>
         <Banner src="" />
         <FeedBar {...config.itemList.PostsNavList} />
         <div className="mt-4">
            <div className="max-w-screen-xl mx-auto">
               <div className="grid grid-cols-12">
                  <div className="col-span-9 pr-5">
                     <PostContainer list={FakeData.Posts.posts} Component={PostItem} />
                  </div>
                  <div className="col-span-3">
                     <GlobalStickySidebar />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Posts;
