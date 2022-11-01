import React from 'react';
import Banner from '~/components/Banner';
import { DiscussionContainer } from '~/components/PostContainer';
import { DiscussionItem } from '~/components/PostItem';

function Discussions() {
   return (
      <>
         <p className="font-bold uppercase text-lg mb-8">Thảo luận</p>
         <DiscussionContainer Component={DiscussionItem} />
      </>
   );
}

export default Discussions;
