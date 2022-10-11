import React from 'react';
import { NavLink } from 'react-router-dom';
import config from '~/config';

function Header() {
   return (
      <div className="fixed top-0 left-0 right-0 flex items-center justify-center h-16 bg-white z-50 shadow-sm">
         <div className="flex items-center justify-between">
            <div>
               {config.itemList.NavigationItems.map((item, index) => (
                  <NavLink key={index} to={item.path} className="p-4 font-bold text-slate-400">
                     {item.title}
                  </NavLink>
               ))}
            </div>
            <div>
               {config.itemList.NavigationItems.map((item, index) => (
                  <NavLink key={index} to={item.path} className="p-4 font-bold text-slate-400">
                     {item.title}
                  </NavLink>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Header;
