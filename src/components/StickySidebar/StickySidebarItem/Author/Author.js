import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import styles from './Author.module.scss';
import classNames from 'classnames/bind';
import MetaItem from '~/components/MetaItem';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AuthorSidebarItem({ data }) {
   const { author } = data;
   const meta = Object.keys(author.meta).map((key) => ({
      title: key,
      value: author.meta[key],
   }));

   return (
      <div className={cx('wrapper') + ' py-2'}>
         <div className="flex w-full gap-4">
            <Image
               src={author.avatar}
               className="block h-[60px] w-[60px] border border-gray-300 rounded-full object-cover"
            />
            <div>
               <p>
                  <Link
                     to={'/author/' + author.username}
                     className="text-sm text-sky-500 hover:text-sky-800 hover:underline"
                  >
                     {author.fullname}
                  </Link>
               </p>
               <p>
                  <span className="text-gray-600 text-sm">@{author.username}</span>
               </p>
               <p className="mt-2">
                  {author.isFollowed ? (
                     <Button primary leftIcon={faCheck} className="text-sm px-2 py-1">
                        Đã theo dõi
                     </Button>
                  ) : (
                     <Button outline leftIcon={faPlus} className="text-sm px-2 py-1">
                        Theo dõi
                     </Button>
                  )}
               </p>
            </div>
         </div>
         <div class="flex items-center gap-5 my-2">
            {meta.map((item, index) => (
               <MetaItem key={index} title={item.title} content={item.value} />
            ))}
         </div>
      </div>
   );
}

export default memo(AuthorSidebarItem);
