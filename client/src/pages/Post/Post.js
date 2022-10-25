import React from 'react';
import Banner from '~/components/Banner';
import PostDetail from './PostDetail';

function Post() {
   return (
      <div className="max-w-screen-xl m-auto">
         <Banner src="" />
         <div className="py-10">
            <PostDetail />
         </div>
      </div>
   );
}

export default Post;
