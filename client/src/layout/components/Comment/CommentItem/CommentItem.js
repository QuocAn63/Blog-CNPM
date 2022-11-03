import React from 'react';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';

function CommentItem(props) {
   const { user, publishedAt } = props;

   return (
      <div>
         <div>
            <Link to={`/author/${user.data.username}`} className="inline-block mx-3">
               <Image src="" className="w-10 h-10 rounded-full" />
            </Link>
            <div className="text-sm">
               <div>
                  <Link to={`/author/${user.data.username}`} className="inline-block font-bold text-sky-600">
                     {user.data.fullname}
                  </Link>
                  <span className="ml-2 text-gray-400">@{user.data.username}</span>
               </div>
               <span className="text-gray-400">{publishedAt}</span>
            </div>
         </div>
      </div>
   );
}

export default CommentItem;
