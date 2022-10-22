import React from 'react';
import Banner from '~/components/Banner';
import { FeedBar } from '~/components/Filter';
import StickySidebar from '~/components/StickySidebar';
import config from '~/config';
import { PostItem } from '~/components/PostItem';
import { PostContainer } from '~/components/PostContainer';
function Posts() {
   return (
      <div>
         <Banner src="" />
         <FeedBar {...config.itemList.PostsNavList} />
         <div className="mt-4">
            <div className="max-w-screen-xl mx-auto">
               <div className="grid grid-cols-12">
                  <div className="col-span-9 pr-5">
                     <PostContainer list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} Component={PostItem} />
                  </div>
                  <div className="col-span-3">
                     <StickySidebar />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Posts;
