import React from 'react';
import Banner from '~/components/Banner/Banner';
import PostContainer from '~/components/PostContainer';
import StickySidebar from '~/components/StickySidebar';

function Home() {
   return (
      <div>
         <Banner src="" alt="Banner" to="/" />
         <div className="max-w-screen-xl m-auto">
            <div className="grid grid-cols-12">
               <div className="col-span-9 pr-5">
                  <PostContainer />
                  <PostContainer />
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
