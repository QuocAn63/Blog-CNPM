import React from 'react';
import CommentItem from '../CommentItem';

function CommentContainer(props) {
   return (
      <div className="p-1 bg-white rounded shadow">
         <CommentItem {...props} />
      </div>
   );
}

export default CommentContainer;
