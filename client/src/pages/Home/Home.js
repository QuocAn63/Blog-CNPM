import React from 'react';
import { HomePostContainer } from '~/components/PostContainer';
import { PostItem, QuestionItem } from '~/components/PostItem';
import FakeData from '~/FakeData';

function Home() {
   return (
      <>
         <HomePostContainer list={FakeData.Posts.posts} title="Bài viết mới nhất" Component={PostItem} />
         <HomePostContainer list={FakeData.Posts.posts} title="Câu hỏi mới nhất" Component={QuestionItem} />
      </>
   );
}

export default Home;
