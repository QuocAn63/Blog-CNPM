import React from 'react';
import Banner from '~/components/Banner';
import { DiscussionContainer } from '~/components/PostContainer';
import { DiscussionItem } from '~/components/PostItem';

function Discussions() {
   return (
      <div>
         <Banner src="" alt="Banner" to="/" />
         <div className="max-w-screen-xl mx-auto">
            <p className="font-bold uppercase text-lg mb-8">Thảo luận</p>
            <DiscussionContainer Component={DiscussionItem} />
         </div>
      </div>
   );
}

export default Discussions;
