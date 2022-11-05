import React from 'react';
import PostDetail from './PostDetail';
import FakeData from '~/FakeData';
import { CommentContainer } from '~/layout/components/Comment';
import CommentRoot from '~/layout/components/Comment/CommentRoot';

function Post() {
   return (
      <>
         <PostDetail {...FakeData.Posts.singlePost} />
         <div className="mt-10">
            <p className="font-bold text-xl mb-6">Bình luận</p>
            <CommentRoot />
            {
               FakeData.Posts.singlePost.comments && FakeData.Posts.singlePost.comments.map((comment, index) =>
                  <CommentContainer key={index} {...comment} />
               )
            }
         </div>
      </>
   );
}

export default Post;
