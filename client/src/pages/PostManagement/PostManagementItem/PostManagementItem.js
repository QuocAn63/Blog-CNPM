import { faEarthAmerica, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const statusLogo = {
   draft: faLock,
   public: faEarthAmerica,
};

function PostManagementItem({ ...props }) {
   const { title, tags, slug, status, updated_at } = props;

   return (
      <div>
         <p className="text-green-500">
            <FontAwesomeIcon icon={statusLogo[status]} />
         </p>
      </div>
   );
}

export default PostManagementItem;
