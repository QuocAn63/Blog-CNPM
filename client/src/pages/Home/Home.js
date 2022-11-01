import React from 'react';
import { HomePostContainer } from '~/components/PostContainer';
import { PostItem, QuestionItem } from '~/components/PostItem';
import { GlobalStickySidebar } from '~/components/StickySidebar';
import FakeData from '~/FakeData';

function Home() {
   return (
      <div className="grid grid-cols-12">
         <div className="col-span-9 pr-5">
            <HomePostContainer list={FakeData.Posts.posts} title="Bài viết mới nhất" Component={PostItem} />
            <HomePostContainer list={FakeData.Posts.posts} title="Câu hỏi mới nhất" Component={QuestionItem} />
         </div>
         <div className="col-span-3">
            <GlobalStickySidebar offsetTop={64} />
         </div>
      </div>
   );
}

export default Home;
