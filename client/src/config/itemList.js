import { faPen, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

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

const QuestionsNavList = {
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
         name: 'Chưa giải quyết',
         path: 'unsolved',
      },
      {
         name: 'Bookmarks của tôi',
         path: 'bookmarks',
      },
   ],
   title: 'Đặt câu hỏi',
   icon: faQuestionCircle,
   path: '/publish/question',
};

export { GlobalNavList, PostsNavList, QuestionsNavList };
