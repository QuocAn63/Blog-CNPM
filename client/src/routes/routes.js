import config from '~/config';

// Pages
import Home from '~/pages/Home';
import Posts from '~/pages/Posts';

const publicRoutes = [
   {
      path: config.routes.home,
      component: Home,
      exact: true
   },
   {
      path: config.routes.posts,
      component: Posts,
      subPath: [
         {
            path: 'followings',
            component: Posts,
         },
         {
            path: 'newest',
            component: Posts,
         },
         {
            path: 'bookmarks',
            component: Posts,
         },
      ],
   },
];

export { publicRoutes };
