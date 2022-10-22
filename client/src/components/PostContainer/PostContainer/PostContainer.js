import React from 'react';
import Pagination from '~/components/Pagination';

function PostContainer({ list, Component }) {
   return (
      <>
         <div className="bg-white rounded shadow">
            {list.map((item, index) => (
               <Component key={index} />
            ))}
         </div>
         <div className="mt-5">
            <Pagination currentPage="1" totalPage="40" perPage="10" />
         </div>
      </>
   );
}

export default PostContainer;
