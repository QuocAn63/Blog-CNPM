import React from 'react';
import PostDetail from './PostDetail';
import FakeData from '~/FakeData';

function Post() {
   return (
      <PostDetail {...FakeData.Posts.singlePost} />
   );
}

export default Post;
