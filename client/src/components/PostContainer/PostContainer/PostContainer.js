import React, { memo, useCallback } from 'react';
import Pagination from '~/components/Pagination';
import { useSearchParams } from 'react-router-dom';

function PostContainer({ list, Component, pagination = true }) {
   let [, setSearchParams] = useSearchParams();
   const changePage = useCallback((number) => {
      setSearchParams((prev) => ({ ...prev, page: number }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <>
         <div className="bg-white rounded shadow">
            {list.map((item, index) => (
               <Component key={index} {...item} />
            ))}
         </div>
         <div className="mt-5">
            {
               pagination && <Pagination totalPageCount={50} onPageChange={changePage} currentPage={20} siblingCount={2} pageSize={10} />
            }
         </div>
      </>
   );
}

export default memo(PostContainer);
