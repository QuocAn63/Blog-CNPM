import React from 'react';
import PostDetail from './PostDetail';
import FakeData from '~/FakeData';
import { CommentContainer } from '~/layout/components/Comment';

function Post() {
   return (
      <>
         <PostDetail {...FakeData.Posts.singlePost} />
         <div className="mt-10">
            <CommentContainer {...FakeData.Posts.singlePost} />
         </div>
      </>
   );
}

export default Post;
