import React from 'react';
import { PostContainer } from '~/components/PostContainer';
import { QuestionItem } from '~/components/PostItem';
import fakeData from '~/FakeData';

function Questions() {
   return (
      <div>
         <PostContainer list={fakeData.Posts.posts} Component={QuestionItem} />

      </div>
   );
}

export default Questions;
