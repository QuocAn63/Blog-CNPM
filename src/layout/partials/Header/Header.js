import React, { useCallback, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '~/components/Image/Button';
import config from '~/config';
import Search from '~/layout/components/Search';
import HeadlessTippy from '@tippyjs/react/';
import Notify from '~/layout/components/Notify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faArrowRightFromBracket,
   faBell,
   faFileLines,
   faGear,
   faPenToSquare,
   faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';
import Image from '~/components/Image';
import 'tippy.js/dist/tippy.css';
import AccountMenu from '~/components/AccountMenu';

import FakeData from '~/FakeData';

function Header() {
   const [notifies, setNotifies] = useState(FakeData.Notify);
   const isLoggedIn = false;

   const AccountActionMenu = useCallback((username) => {
      return [
         {
            title: 'Trang cá nhân',
            icon: faUser,
            path: '/user/' + username,
         },
         {
            title: 'Quản lý nội dung',
            icon: faFileLines,
            path: '/myposts',
         },
         {
            title: 'Tuỳ chỉnh',
            icon: faGear,
            path: '/settings',
         },
      ];
   });

   return (
      <div className="fixed top-0 left-0 right-0 flex items-center justify-center h-16 bg-white z-50 shadow-lg">
         <div className="flex items-center justify-between max-w-screen-xl w-full">
            <div>
               {config.itemList.GlobalNavList.map((item, index) => (
                  <NavLink
                     key={index}
                     to={item.path}
                     className={(nav) => (nav.isActive ? 'p-4 font-bold text-sky-700' : 'p-4 font-bold text-slate-400')}
                  >
                     {item.title}
                  </NavLink>
               ))}
            </div>
            <Search />
            <div className="flex justify-between">
               {isLoggedIn ? (
                  <>
                     <HeadlessTippy
                        interactive
                        trigger="click"
                        appendTo={document.body}
                        placement="top-end"
                        animation={false}
                        render={() => (
                           <div className="w-80 min-h-[160px] bg-white border border-slate-200 shadow rounded overflow-hidden">
                              <div className="p-3 text-sm leading-4 font-bold uppercase text-white bg-sky-700">
                                 Thông báo
                              </div>
                              <div className="min-h-[120px] max-h-[350px] overflow-y-scroll relative">
                                 {notifies.length === 0 ? (
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base text-center">
                                       Không có thông báo
                                    </div>
                                 ) : (
                                    notifies.map((notify, index) => <Notify data={notify} key={index} />)
                                 )}
                              </div>
                              {notifies.length > 0 && (
                                 <button className="block w-full cursor-pointer py-3 text-white bg-sky-600 font-semibold outline-none border-none">
                                    Xem tất cả
                                 </button>
                              )}
                           </div>
                        )}
                     >
                        <Button primary className="h-10 w-10">
                           <FontAwesomeIcon icon={faBell} />
                        </Button>
                     </HeadlessTippy>
                     <Tippy content="Viết bài">
                        <Button primary to="/publish/post" className="w-10 h-10">
                           <FontAwesomeIcon icon={faPenToSquare} />
                        </Button>
                     </Tippy>
                     <HeadlessTippy
                        trigger="click"
                        interactive
                        placement="top-end"
                        appendTo={document.body}
                        animation={false}
                        render={() => (
                           <div className="w-56 bg-white rounded shadow">
                              {AccountActionMenu('caoan632002').map((item, index) => (
                                 <AccountMenu title={item.title} to={item.path} icon={item.icon} key={index} />
                              ))}
                              <AccountMenu
                                 title="Đăng xuất"
                                 icon={faArrowRightFromBracket}
                                 horizontal
                                 // onClick={handleLogout}
                              />
                           </div>
                        )}
                     >
                        <Image
                           src=""
                           alt="User Avatar"
                           className="block h-10 w-10 object-cover border boder-slate-200 rounded-full ml-3 cursor-pointer"
                        />
                     </HeadlessTippy>
                  </>
               ) : (
                  <>
                     <Button primary text to="/login">
                        Log in
                     </Button>
                     <Button outline text to="/register">
                        Register
                     </Button>
                  </>
               )}
            </div>
         </div>
      </div>
   );
}

export default Header;
