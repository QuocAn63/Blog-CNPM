import config from '~/config';
import Discussions from '~/pages/Discussions';

// Pages
import Home from '~/pages/Home';
import Post from '~/pages/Post';
import Posts from '~/pages/Posts';

const publicRoutes = [
   {
      path: config.routes.home,
      component: Home,
      exact: true,
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
   {
      path: config.routes.discussions,
      component: Discussions,
   },
   {
      path: config.routes.post,
      component: Post,
   },
];

export { publicRoutes };
