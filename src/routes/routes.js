import config from '~/config'

// Pages
import Home from '~/pages/Home';

const publicRoutes = [
   {
      path: config.routes.home,
      component: Home,
   },
];

export { publicRoutes };
