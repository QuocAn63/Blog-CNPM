import config from '~/config';

// Pages
import HomePage from '~/pages/Home';
import PostsPage from '~/pages/Posts';
import QuestionsPage from '~/pages/Questions';

const publicRoutes = [
   {
      path: config.routes.home,
      component: HomePage,
      exact: true
   },
   {
      path: config.routes.posts,
      component: PostsPage,
      subPath: [
         {
            path: 'followings',
            component: PostsPage,
         },
         {
            path: 'newest',
            component: PostsPage,
         },
         {
            path: 'bookmarks',
            component: PostsPage,
         },
      ],
   },
   {
      path: config.routes.questions,
      component: QuestionsPage,
      subPath: [
         {
            path: 'unsolved',
            component: QuestionsPage,
         },
         {
            path: 'newest',
            component: QuestionsPage,
         },
         {
            path: 'bookmarks',
            component: QuestionsPage,
         },
         {
            path: 'followings',
            component: QuestionsPage,
         },
      ],
   },
];

export { publicRoutes };
