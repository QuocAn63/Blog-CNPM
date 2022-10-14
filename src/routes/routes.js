import config from '~/config';

// Pages
import Home from '~/pages/Home';

const publicRoutes = [
   {
      path: config.routes.home,
      component: Home,
      subPath: [
         {
            component: Home,
            path: 'followings',
         },
         {
            component: Home,
            path: 'newest',
         },
         {
            component: Home,
            path: 'bookmarks',
         },
      ],
   },
];

export { publicRoutes };
