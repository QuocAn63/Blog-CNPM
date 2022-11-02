import React from 'react';
import styles from './DiscussionItem.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import MetaItem from '~/components/MetaItem';

const cx = classNames.bind(styles);

function User({ username, fullname, avatar }) {
   return (
      <>
         <Link to={'/author/' + username} className="mr-4">
            <Image src="/" className="w-8 h-8 rounded-full object-cover" />
         </Link>
         <div className="basis-[8vw] mr-4 overflow-hidden whitespace-nowrap text-ellipsis">
            <Link to={'/author/' + username} className="mr-4 text-sm text-sky-600 hover:text-sky-800 hover:underline">
               {fullname}
            </Link>
         </div>
      </>
   );
}

const user = {
   username: '1234',
   fullname: 'Nguyễn Văn Thanh',
   avatar: '',
};

function DiscussionItem() {
   return (
      <div className={cx('wrapper') + ' px-2 py-4'}>
         <div>
            <div className="flex items-center justify-between w-full">
               <div className="flex items-center whitespace-nowrap">
                  <User {...user} />
                  <span className="mr-4 text-sm flex">
                     đã bình luận cho bài viết{' '}
                     <Link
                        to="/"
                        className="mx-4 inline-block max-w-[20vw] text-ellipsis whitespace-nowrap overflow-hidden text-sky-600 hover:text-sky-800 hover:underline"
                     >
                        Hướng dẫn sử dụng Redux trong Reactjs Hướng dẫn sử dụng Redux trong Reactjs Hướng dẫn sử dụng
                        Redux trong Reactjs Hướng dẫn sử dụng Redux trong Reactjs Hướng dẫn sử dụng Redux trong Reactjs
                     </Link>{' '}
                     của
                  </span>
                  <User {...user} />
               </div>
               <MetaItem title="publishedAt" content=" khoảng 1 giờ trước" />
            </div>
            <p className="text-sm line-clamp-6">
               Cho mình hỏi chút là mình chỉ login được với 1 account facebook mình dùng để tạo ứng dụng phát triển, còn
               các account fb khác thì mình login nó báo ứng dụng không hoạt động
            </p>
            <div className="mt-6">
               <MetaItem title="points" content="0" />
            </div>
         </div>
      </div>
   );
}

export default DiscussionItem;
