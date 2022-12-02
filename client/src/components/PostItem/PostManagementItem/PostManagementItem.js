import { faAngleDown, faEarthAmerica, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '~/components/Popper';

const statusLogo = {
   draft: <FontAwesomeIcon icon={faLock} className="text-green-400" />,
   public: <FontAwesomeIcon icon={faEarthAmerica} className="text-sky-400" />,
};

function PostManagementItem({ ...props }) {
   const { title, tags, slug, status, updated_at } = props;

   return (
      <div className="bg-white rounded shadow border border-gray-300 mt-2 p-3">
         <p>
            {statusLogo[status]}
            <span className="ml-1 font-medium">{title}</span>
         </p>
         <p className="mt-2">
            <span className="text-gray-400 text-sm">Sửa lần cuối: {updated_at}</span>
            <Tippy
               trigger="click"
               interactive
               placement="bottom"
               animation={false}
               render={() => (
                  <Wrapper>
                     <ul className="min-w-[80px]">
                        <li>
                           <Link
                              className="block px-3 py-1 text-sm cursor-pointer hover:bg-sky-100 hover:text-sky-600"
                              to={`/edit/post/${slug}`}
                           >
                              Sửa
                           </Link>
                        </li>
                        <li>
                           <span className="block px-3 py-1 text-sm cursor-pointer hover:bg-sky-100 hover:text-sky-600">
                              Xóa
                           </span>
                        </li>
                     </ul>
                  </Wrapper>
               )}
            >
               <FontAwesomeIcon icon={faAngleDown} className="ml-3 text-gray-300 cursor-pointer" />
            </Tippy>
         </p>
      </div>
   );
}

export default PostManagementItem;
