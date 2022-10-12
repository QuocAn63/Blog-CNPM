import React from 'react';
import { NavLink } from 'react-router-dom';
import config from '~/config';
import Search from '~/layout/components/Search';

function Header() {
   return (
      <div className="fixed top-0 left-0 right-0 flex items-center justify-center h-16 bg-white z-50 shadow-lg">
         <div className="flex items-center justify-between max-w-screen-xl w-full">
            <div>
               {config.itemList.NavigationItems.map((item, index) => (
                  <NavLink
                     key={index}
                     to={item.path}
                     className={(nav) => (nav.isActive ? 'p-4 font-bold text-sky-800' : 'p-4 font-bold text-slate-400')}
                  >
                     {item.title}
                  </NavLink>
               ))}
            </div>
            <div>
               <Search />
            </div>
         </div>
      </div>
   );
}

export default Header;
