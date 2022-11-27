import React from 'react';
import { HomePostContainer } from '~/components/PostContainer';
import { PostItem, SeriesItem } from '~/components/PostItem';
import FakeData from '~/FakeData';

function Home() {
   return (
      <>
         <HomePostContainer list={FakeData.Posts.posts} title="Bài viết mới nhất" Component={PostItem} />
         <HomePostContainer list={FakeData.Posts.posts} title="Series mới nhất" Component={SeriesItem} />
      </>
   );
}

export default Home;
