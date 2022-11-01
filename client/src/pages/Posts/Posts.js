import React from 'react';
import { PostItem } from '~/components/PostItem';
import { PostContainer } from '~/components/PostContainer';

import FakeData from '~/FakeData';

function Posts() {
   return (
      <div>
         <PostContainer list={FakeData.Posts.posts} Component={PostItem} />
      </div>
   );
}

export default Posts;
