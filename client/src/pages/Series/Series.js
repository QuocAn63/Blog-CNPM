import React from 'react';
import { PostContainer } from '~/components/PostContainer';
import { SeriesItem } from '~/components/PostItem';
import fakeData from '~/FakeData';

function Series() {
   return (
      <div>
         <PostContainer list={fakeData.Posts.posts} Component={SeriesItem} />
      </div>
   );
}

export default Series;
