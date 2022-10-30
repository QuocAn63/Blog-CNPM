import React from 'react';
import Banner from '~/components/Banner';
import { FeedBar } from '~/components/Filter';
import { PostContainer } from '~/components/PostContainer';
import { QuestionItem } from '~/components/PostItem';
import { GlobalStickySidebar } from '~/components/StickySidebar';
import config from '~/config';
import fakeData from '~/FakeData';

function Questions() {
   return (
      <div>
         <Banner src="" />
         <FeedBar {...config.itemList.QuestionsNavList} />
         <div className="mt-4">
            <div className="max-w-screen-xl mx-auto">
               <div className="grid grid-cols-12">
                  <div className="col-span-9 pr-5">
                     <PostContainer list={fakeData.Posts.posts} Component={QuestionItem} />
                  </div>
                  <div className="col-span-3">
                     <GlobalStickySidebar />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Questions;
