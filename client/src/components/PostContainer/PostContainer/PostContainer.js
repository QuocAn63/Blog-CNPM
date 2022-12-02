import React, { memo, useCallback } from 'react';
import Pagination from '~/components/Pagination';
import { useSearchParams } from 'react-router-dom';

function PostContainer({ list, Component, pagination = true, span = 12 }) {
   let [, setSearchParams] = useSearchParams();
   const changePage = useCallback((number) => {
      setSearchParams((prev) => ({ ...prev, page: number }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return (
      <>
         <div className="grid grid-cols-12">
            {list.map((item, index) => (
               <div className={`col-span-${span}`} key={index}>
                  <Component {...item} />
               </div>
            ))}
         </div>
         <div className="mt-5">
            {pagination && (
               <Pagination
                  totalPageCount={50}
                  onPageChange={changePage}
                  currentPage={20}
                  siblingCount={2}
                  pageSize={10}
               />
            )}
         </div>
      </>
   );
}

export default memo(PostContainer);
