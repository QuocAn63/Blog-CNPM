import React from 'react';
import CommentItem from '../CommentItem';

import styles from './CommentContainer.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function CommentContainer(props) {
   return (
      <div className={cx('wrapper')}>
         <div className="bg-white rounded shadow px-6">
            <CommentItem {...props} />
            <div className="ml-5">
               <CommentItem {...props} reply />
               <CommentItem {...props} reply />
               <CommentItem {...props} reply />
            </div>
         </div>
      </div>
   );
}

export default CommentContainer;
