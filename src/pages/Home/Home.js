import React from 'react';
import Banner from '~/components/Banner/Banner';
import PostContainer from '~/components/PostContainer';

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
                  <div className="border border-slate-200 rounded shadow h-10"></div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
