import React, { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from '~/components/Pagination';

function DiscussionContainer({ list, Component }) {
   let [searchParams, setSearchParams] = useSearchParams();
   const changePage = useCallback((number) => {
      setSearchParams((prev) => ({ ...prev, page: number }));
   });

   return (
      <>
         <div className="bg-white rounded shadow">
            {[1, 2, 3, 4, 5].map((item, index) => (
               <Component key={index} />
            ))}
         </div>
         <div className="mt-5">
            <Pagination totalPageCount={50} onPageChange={changePage} currentPage={20} siblingCount={2} pageSize={10} />
         </div>
      </>
   );
}

export default DiscussionContainer;
