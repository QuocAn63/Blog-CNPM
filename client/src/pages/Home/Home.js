import React from 'react';
import Banner from '~/components/Banner/Banner';
import { HomePostContainer } from '~/components/PostContainer';
import { PostItem, QuestionItem } from '~/components/PostItem';
import StickySidebar from '~/components/StickySidebar';
import FakeData from '~/FakeData';

function Home() {
   return (
      <div>
         <Banner src="" alt="Banner" to="/" />
         <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-12">
               <div className="col-span-9 pr-5">
                  <HomePostContainer list={FakeData.Posts.posts} title="Bài viết mới nhất" Component={PostItem} />
                  <HomePostContainer list={FakeData.Posts.posts} title="Câu hỏi mới nhất" Component={QuestionItem} />
               </div>
               <div className="col-span-3">
                  <StickySidebar />
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
