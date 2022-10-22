import React, { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';

import { usePagination, DOTS } from '~/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
const Pagination = (props) => {
   const { onPageChange, totalPageCount, siblingCount = 1, currentPage, pageSize, className } = props;

   const paginationRange = usePagination({
      currentPage,
      totalPageCount,
      siblingCount,
      pageSize,
   });

   if (currentPage === 0 || paginationRange.length < 2) {
      return null;
   }

   const onNext = () => {
      onPageChange(currentPage + 1);
   };

   const onPrevious = () => {
      onPageChange(currentPage - 1);
   };

   let lastPage = paginationRange[paginationRange.length - 1];
   return (
      <ul className={cx('container', { [className]: className })}>
         <li
            className={cx('item', {
               disabled: currentPage === 1,
            })}
            onClick={onPrevious}
         >
            <FontAwesomeIcon icon={faAngleLeft} />
         </li>
         {paginationRange.map((pageNumber, index) => {
            if (pageNumber === DOTS) {
               return (
                  <li key={index} className="item dots">
                     &#8230;
                  </li>
               );
            }

            return (
               <li
                  className={cx('item', {
                     selected: pageNumber === currentPage,
                  })}
                  key={index}
                  onClick={() => onPageChange(pageNumber)}
               >
                  {pageNumber}
               </li>
            );
         })}
         <li
            className={cx('item', {
               disabled: currentPage === lastPage,
            })}
            onClick={onNext}
         >
            <FontAwesomeIcon icon={faAngleRight} />
         </li>
      </ul>
   );
};

export default memo(Pagination);
