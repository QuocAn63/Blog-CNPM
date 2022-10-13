import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function AccountMenu({ title, icon, to, onClick, horizontal = false, ...passProps }) {
   const props = {
      onClick,
      ...passProps,
   };

   let Comp = 'div';

   if (to) {
      props.to = to;
      Comp = Link;
   }

   return (
      <Comp
         className={
            'flex items-center w-full gap-3 px-3 py-2 cursor-pointer hover:bg-slate-200' +
            (horizontal ? ' border-top border-slate-200' : null)
         }
         {...props}
      >
         <span className="flex items-center">
            <FontAwesomeIcon icon={icon} />
         </span>
         <div className="text-base leading-4">{title}</div>
      </Comp>
   );
}

export default AccountMenu;
