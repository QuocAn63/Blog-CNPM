import config from '~/config';

// Layout
import { DefaultSidebarless } from '~/layout';
import FullScreen from '~/layout/FullScreen';

// Sidebar
import { PostSidebar } from '~/layout/components/Sidebar';

// Pages
import HomePage from '~/pages/Home';
import PostsPage from '~/pages/Posts';
import SeriesPage from '~/pages/Series';
import DiscussionsPage from '~/pages/Discussions';
import PostPage from '~/pages/Post';
import SeriesItemPage from '~/pages/SeriesItem';
import LoginPage from '~/pages/Login';
import PublishPage from '~/pages/Publish';
import ProfilePage from '~/pages/Profile'
import PostManagementPage from '~/pages/PostManagement';
import SearchPage from '~/pages/Search';
import NotificationsPage from '~/pages/Notifications'

const publicRoutes = [
   {
      path: config.routes.home,
      component: HomePage,
      exact: true,
   },
   {
      path: config.routes.posts,
      component: PostsPage,
      feedbar: config.itemList.PostsNavList,
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
      path: config.routes.series,
      component: SeriesPage,
      feedbar: config.itemList.SeriesNavList,
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
      path: config.routes.discussions,
      component: DiscussionsPage,
      layout: DefaultSidebarless,
   },
   {
      path: config.routes.post,
      component: PostPage,
      Sidebar: PostSidebar,
   },
   {
      path: config.routes.seriesItem,
      component: SeriesItemPage,
      Sidebar: PostSidebar,
   },
   {
      path: config.routes.login,
      component: LoginPage,
      layout: null,
   },
   {
      path: config.routes.register,
      component: LoginPage,
      layout: null,
   },
   {
      path: config.routes.publish,
      component: PublishPage,
      layout: FullScreen,
      subPath: [
         {
            path: 'post',
            component: PublishPage,
         },
         {
            path: 'series',
            component: PublishPage,
         },
      ],
   },
   {
      path: config.routes.user,
      component: ProfilePage,
      layout: FullScreen,
   },
   {
      path: config.routes.me,
      component: PostManagementPage,
      layout: DefaultSidebarless,
   },
   {
      path: config.routes.search,
      component: SearchPage,
      layout: DefaultSidebarless
   },
   {
      path: config.routes.notifications,
      component: NotificationsPage,
      layout: DefaultSidebarless
   }

];

export { publicRoutes };
