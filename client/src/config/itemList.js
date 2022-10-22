import { faPen } from '@fortawesome/free-solid-svg-icons';

const GlobalNavList = [
   {
      title: 'Trang chủ',
      path: '/',
      end: true,
   },
   {
      title: 'Bài viết',
      path: '/posts',
   },
   {
      title: 'Hỏi đáp',
      path: '/questions',
   },
   {
      title: 'Thảo luận',
      path: '/discussions',
   },
];

const PostsNavList = {
   list: [
      {
         name: 'Đang theo dõi',
         path: 'followings',
         exact: true,
      },
      {
         name: 'Mới nhất',
         path: 'newest',
      },
      {
         name: 'Đánh giá cao',
         path: 'ratings',
      },
      {
         name: 'Bookmarks của tôi',
         path: 'bookmarks',
      },
   ],
   title: 'Viết bài',
   icon: faPen,
   path: '/publish/post',
};

export { GlobalNavList, PostsNavList };
