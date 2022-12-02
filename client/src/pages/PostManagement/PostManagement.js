import React from 'react';
import { PostContainer } from '~/components/PostContainer';
import { PostManagementItem } from '~/components/PostItem';
import fakeData from '~/FakeData';
import { PostManagementFilter } from '~/layout/components/Filter';
import { PostManagementMenu } from '~/layout/components/Menu';

function PostManagement() {
   return (
      <div className="grid grid-cols-12 gap-8">
         <div className="col-span-3">
            <PostManagementMenu />
         </div>
         <div className="col-span-9">
            <PostManagementFilter />
            <div className="mt-5">
               <PostContainer list={fakeData.Posts.posts} Component={PostManagementItem} />
            </div>
         </div>
      </div>
   );
}

export default PostManagement;
