import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Button from '~/components/Image/Button';
import config from '~/config';
import Search from '~/layout/components/Search';
import HeadlessTippy from '@tippyjs/react/'
import Notify from '~/layout/components/Notify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/';

const NotifyData = [
   {
      ID: '1',
      TITLE: 'Cao Quoc An đã bình luận bài viết của bạn',
      TIME: '2022-10-2 10:20',
      DESCRIPTION: 'Bài viết tuyệt vời, quá hay, xuất sắc',
   },
   {
      ID: '2',
      TITLE: 'Cao Quoc An đã bình luận bài viết của bạn',
      TIME: '2022-10-2 10:20',
      DESCRIPTION: 'Bài viết tuyệt vời, quá hay, xuất sắc',
   },
   {
      ID: '3',
      TITLE: 'Cao Quoc An đã bình luận bài viết của bạn',
      TIME: '2022-10-2 10:20',
      DESCRIPTION:
         'Bookmark là tính năng được các user sử dụng khi muốn lưu lại một bài viết hay của tác giả khác, thuận tiện cho quá trình tìm đọc lại sau này. Hành động tự Bookmark bài viết của mình không góp phần phản ánh chất lượng của bài viết, và thực chất không mang nhiều giá trị, do tác giả có thể tự xem lại bài viết trong phần Cá nhân => Quản lý nội dung. Ngoài ra, đội ngũ phát triển Viblo sẽ loại bỏ tính năng tự bookmark bài viết của mình trong thời gian tới.',
   },
];

function Header() {
   const [notifies, setNotifies] = useState(NotifyData)
   const isLoggedIn = true;

   return (
      <div className="fixed top-0 left-0 right-0 flex items-center justify-center h-16 bg-white z-50 shadow-lg">
         <div className="flex items-center justify-between max-w-screen-xl w-full">
            <div>
               {config.itemList.NavigationItems.map((item, index) => (
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
            <div>
               {
                  isLoggedIn ? <>
                     <HeadlessTippy
                        interactive
                        trigger="click"
                        appendTo={document.body}
                        placement="top-end"
                        render={() => (
                           <div className='w-80 min-h-[160px] bg-white border border-slate-200 shadow rounded overflow-hidden'>
                              <div className='p-3 text-sm leading-4 font-bold uppercase text-white bg-sky-700'>Thông báo</div>
                              <div className='min-h-[120px] max-h-[350px] overflow-y-scroll relative'>
                                 {notifies.length === 0 ? (
                                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-base text-center'>Không có thông báo</div>
                                 ) : (
                                    notifies.map((notify, index) => <Notify data={notify} key={index} />)
                                 )}
                              </div>
                              {notifies.length > 0 && <button className='block w-full cursor-pointer py-3 text-white bg-sky-600 font-semibold outline-none border-none'>Xem tất cả</button>}
                           </div>
                        )}
                     >
                        <Button primary className='h-10 w-10'>
                           <FontAwesomeIcon icon={faBell} />
                        </Button>
                     </HeadlessTippy>
                     <Tippy content="Viết bài">
                        <Button primary to="/publish/post" className='w-10 h-10'>
                           <FontAwesomeIcon icon={faPenToSquare} />
                        </Button>
                     </Tippy>
                  </> : <><Button primary text to="/login" >Log in</Button>
                     <Button outline text to="/register" >Register</Button></>
               }
            </div>
         </div>
      </div>
   );
}

export default Header;
