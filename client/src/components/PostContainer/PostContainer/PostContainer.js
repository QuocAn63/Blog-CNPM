import React, { memo, useCallback } from 'react';
import Pagination from '~/components/Pagination';
import { useSearchParams } from 'react-router-dom';

function PostContainer({ list, Component, pagination = true, span = 12, loading, ...props }) {
   let [, setSearchParams] = useSearchParams();
   const changePage = useCallback((number) => {
      setSearchParams((prev) => ({ ...prev, page: number }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return !loading &&
      (list.length > 0 ? (
         <>
            <div className="grid grid-cols-12">
               {list.map((item, index) => (
                  <div className={"col-span-" + span} key={index}>
                     <Component {...item} {...props} />
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
      ) : <p className="text-sm text-center text-gray-400 font-semibold">Không có gì ở đây cả</p>)

}

export default memo(PostContainer);
